import React, { useEffect, useState, useContext } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { TiMessageTyping } from 'react-icons/ti';

// Theme
import { StyledPartner } from '../styles/Partner.style';

// API
import { getMessages, getRooms } from '../utils/api';

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
			token,
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
		console.log('ue');
		if (token && userId) {
			getRooms(token)
				.then((room) => {
					setRoom(room);

					return room;
				})
				.then((room) => {
					getMessages(token, roomId).then((messages) => {
						setMessages(messages);
					});
				})
				.catch((err) => {
					console.log('useEffect: ', err);
				});
		} else {
			navigate('/');
		}
	}, [token, userId]);

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
	});

	return (
		<StyledPartner>
			<section>
				<h1>What's on the agenda?</h1>
				<div>
					{messages &&
						messages.length > 0 &&
						messages.map((message) => {
							return (
								<span key={message._id}>
									<p className={message.senderId === userId ? 'right' : 'left'}>
										{message.message}
									</p>
								</span>
							);
						})}
				</div>
				<form>
					<p hidden={!isTyping}>
						<TiMessageTyping color='green' size='28px' />
					</p>
					<input
						type='text'
						value={message}
						placeholder={`I've come to say hello again`}
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
