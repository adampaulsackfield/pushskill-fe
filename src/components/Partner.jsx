import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { StyledPartner } from '../styles/Partner.style';

import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';
import { SocketContext } from '../context/SocketContext';
import { RoomContext } from '../context/RoomsContext';

import './Partner.css';

const Partner = () => {
	const context = useContext(TokenContext);
	const token = context.token;
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const { userId } = useContext(UserContext);
	const { socket } = useContext(SocketContext);
	const { roomId } = useContext(SocketContext);

	const [room, setRoom] = useState('');
	const [roomRegistered, setRoomRegistered] = useState(false);

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
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	}, []);

	useEffect(() => {
		console.log('messages', messages);

		if (room?._id) {
			socket.emit('get_messages', { token, roomId: room._id });
		}

		if (!roomRegistered) {
			socket.emit('join_room', { roomId: room._id });
			setRoomRegistered(true);
		}

		socket.on('room_messages', (data) => {
			console.log('room_messages', data);
			setMessages(data);
		});

		socket.on('chat_message', (data) => {
			console.log('receive_message', data);
			setMessages(data);
		});

		socket.on('notification', (data) => {
			// toast.success(data); TODO - Triggers too many times
		});
	});

	const handleSendMsg = (e) => {
		e.preventDefault();

		socket.emit('chat_message', {
			token,
			roomId: room._id,
			recipientId: room.creator === userId ? room.member : userId,
			message,
		});

		setMessage('');
	};

	return (
		<StyledPartner>
			<main>
				<section>
					<h1>{room._id && `Room Name: ${room.name}`}</h1>
					<div>
						<form>
							<input
								type='text'
								placeholder='say something...'
								onChange={(e) => setMessage(e.target.value)}
							/>
							<button onClick={handleSendMsg}>SEND</button>
						</form>

						<div>
							<h1>Messages</h1>

							<ul>
								{messages &&
									messages.map((message) => {
										return (
											<li
												key={message._id}
												className={
													message.senderId === userId ? 'right' : 'left'
												}
											>
												{message.message}
											</li>
										);
									})}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</StyledPartner>
	);
};

export default Partner;
