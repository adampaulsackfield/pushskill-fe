import React, { useEffect, useState, useContext } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TiMessageTyping } from 'react-icons/ti';

// Theme
import { StyledPartner } from '../styles/Partner.style';

// API
import { getRooms } from '../utils/api';

// Context
import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';
import { SocketContext } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';

const Partner = () => {
	const navigate = useNavigate();
	const context = useContext(TokenContext);
	const token = context.token;
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const [isTyping, setIsTyping] = useState(false);

	const { userId } = useContext(UserContext);
	const { socket } = useContext(SocketContext);
	const roomId = localStorage.getItem('roomId');

	const [room, setRoom] = useState('');

	const handleStartTypingEvent = () => {
		console.log('user typing event');
		socket.emit('user_typing_start', { room_id: roomId });
	};

	const handleEndTypingEvent = (e) => {
		socket.emit('user_typing_end', { room_id: roomId });
	};

	const handleSendMsg = (e) => {
		e.preventDefault();

		socket.emit('chat_message', {
			senderId: room.creator === userId ? room.creator : room.member,
			room_id: roomId,
			recipientId: room.creator !== userId ? room.creator : room.member,
			message,
		});

		setMessages([
			...messages,
			{
				senderId: room.creator === userId ? room.creator : room.member,
				room_id: roomId,
				recipientId: room.creator !== userId ? room.creator : room.member,
				message,
			},
		]);

		setMessage('');
	};

	useEffect(() => {
		if (token && userId) {
			axios
				.get(`http://localhost:9090/api/rooms`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setRoom(res.data.rooms[0]);

					axios
						.get(`http://localhost:9090/api/rooms/${roomId}/messages`, {
							headers: {
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							setMessages(res.data.messages);
						});
				})
				.catch((err) => {
					console.log('err', err);
				});
		} else {
			navigate('/');
		}
	});

	useEffect(() => {
		socket.emit('join_room', { room_id: roomId });

		socket.on('receive_message', (data) => {
			setMessages([...messages, data]);
		});

		socket.on('rooms_list', (data) => {
			console.log('listrooms', data);
		});

		socket.on('user_typing', () => {
			setIsTyping(true);
		});

		socket.on('stop_typing', () => {
			setIsTyping(false);
		});
	}, [socket]);

	return (
		<StyledPartner>
			<h1>{roomId && `Room Name: ${roomId}`}</h1>
			<section>
				<h1>Messages</h1>
				<div>
					<p hidden={!isTyping}>
						<TiMessageTyping color='green' size='32px' />
					</p>
					<ul>
						{messages &&
							messages.map((message) => {
								return (
									<li
										key={message._id}
										className={message.senderId === userId ? 'right' : 'left'}
									>
										{message.message}
									</li>
								);
							})}
					</ul>
				</div>

				<form>
					<input
						type='text'
						value={message}
						placeholder='say something...'
						onChange={(e) => setMessage(e.target.value)}
						onFocus={handleStartTypingEvent}
						onBlur={(e) => handleEndTypingEvent(e)}
					/>
					<button onClick={handleSendMsg}>
						<RiSendPlaneFill />
					</button>
				</form>
			</section>
		</StyledPartner>
	);
};

export default Partner;
