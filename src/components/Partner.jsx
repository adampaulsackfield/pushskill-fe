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
	const { roomId } = useContext(RoomsContext);

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

					console.log('ROOM ID ._id', room._id);
					axios
						.get(`http://localhost:9090/api/rooms/${room._id}/messages`, {
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
			senderId: room.creator === userId ? userId : room.member,
			room_id: room?._id,
			recipientId: room.creator === userId ? room.member : userId,
			message,
		});

		setMessage('');
	};

	const listRooms = () => {
		socket.emit('list_rooms');
	};

	return (
		<StyledPartner>
			<main>
				<section>
					<h1>{room?._id && `Room Name: ${room?._id}`}</h1>
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
