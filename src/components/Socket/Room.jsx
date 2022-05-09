import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SocketContext } from '../../context/SocketContext';
import { TokenContext } from '../../context/TokenContext';

const Room = () => {
	// Individual room is passed to the Link element as state.
	const location = useLocation();
	const { id } = location.state;
	const { room_name } = useParams();

	// Context
	const context = useContext(SocketContext);
	const token = useContext(TokenContext).token;

	// Messages State
	const [message, setMessage] = useState(''); // Current messsage
	const [messages, setMessages] = useState([]); // All messages for room

	// RoomID State
	const [roomId, setRoomId] = useState('');

	useEffect(() => {
		// Once component loads we can trigger the endpoint to accept the pairing
		if (id && token) {
			axios
				.get(`http://localhost:9090/api/users/matches/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					console.log('data', res.data.room);
					setRoomId(res.data.room._id);
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	}, [context]);

	return (
		<div>
			<h1>Room Component</h1>
			<h3>Room ID: {roomId}</h3>

			<ul>
				{/* {messages &&
					messages.map((message) => {
						console.log(message);
						return <li key={message.id}>Test</li>;
					})} */}
			</ul>
		</div>
	);
};

export default Room;
