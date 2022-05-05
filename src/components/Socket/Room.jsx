import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SocketContext } from '../../context/SocketContext';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzJlZGU0ZGNmNWY5YzNkYmE4YjA1NiIsImlhdCI6MTY1MTc0MjU3MiwiZXhwIjoxNjU0MzM0NTcyfQ.6MSN9aCy2cS3ZFli4JnL7dVjVpUJZYWnQWK3CVpwwIo';

const recipientId = '6272ede4dcf5f9c3dba8b056';

const Room = () => {
	// Individual room is passed to the Link element as state.
	const location = useLocation();
	const room = location.state;

	// Context
	const context = useContext(SocketContext);

	// Messages State
	const [message, setMessage] = useState(''); // Current messsage
	const [messages, setMessages] = useState([]); // All messages for room

	// RoomID State
	const [roomId, setRoomId] = useState('');

	// When the component loads we will send the request to join the room
	useEffect(() => {
		context.socket.emit('join_room', { room, token, recipientId });

		context.socket.on('joined_room', (room) => {
			setRoomId(room._id);
		});

		context.socket.emit('get_messages', { token, roomId });

		context.socket.on('room_messages', (messages) => {
			setMessages(messages);
		});
	}, [context.socket]);

	return (
		<div>
			<h1>Room Component</h1>

			<ul>
				{messages &&
					messages.map((message) => {
						console.log(message);
						return <li key={message.id}>Test</li>;
					})}
			</ul>
		</div>
	);
};

export default Room;
