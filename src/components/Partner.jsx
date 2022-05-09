import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { StyledPartner } from '../styles/Partner.style';

import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';
import { SocketContext } from '../context/SocketContext';
import { RoomContext, RoomsContext } from '../context/RoomsContext';

import './Partner.css';

const Partner = () => {
	const context = useContext(TokenContext);
	const token = context.token;
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');

	const { userId } = useContext(UserContext);
	const { socket } = useContext(SocketContext);
	const roomId = localStorage.getItem('roomId');

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
					console.log('rooomio', room);
					setRoom(res.data.rooms[0]);

					console.log('ROOM ID .id', roomId);
					axios
						.get(`http://localhost:9090/api/rooms/${roomId}/messages`, {
							headers: {
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							console.log('1,000,000', res.data);
							setMessages(res.data.messages);
						});
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	}, []);

	useEffect(() => {
		socket.emit('join_room', { room_id: roomId });

		socket.on('receive_message', (data) => {
			console.log('1,000,001', data);
			setMessages([...messages, data]);
		});

		socket.on('rooms_list', (data) => {
			console.log('listrooms', data);
		});
	});

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

	const listRooms = () => {
		socket.emit('list_rooms');
	};

	return (
		<StyledPartner>
			<main>
				<section>
					<h1>{roomId && `Room Name: ${roomId}`}</h1>
					<div>
						<form>
							<input
								type='text'
								value={message}
								placeholder='say something...'
								onChange={(e) => setMessage(e.target.value)}
							/>
							<button onClick={handleSendMsg}>SEND</button>
						</form>

						<div>
							<h1>Messages</h1>
							<button onClick={listRooms}>CLICK ME</button>
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
