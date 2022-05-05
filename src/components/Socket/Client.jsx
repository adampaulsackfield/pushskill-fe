import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { Link } from 'react-router-dom';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzJlZGU0ZGNmNWY5YzNkYmE4YjA1NiIsImlhdCI6MTY1MTc0MjU3MiwiZXhwIjoxNjU0MzM0NTcyfQ.6MSN9aCy2cS3ZFli4JnL7dVjVpUJZYWnQWK3CVpwwIo';

const Client = () => {
	// Socket IO
	const context = useContext(SocketContext);

	// Room State
	const [room, setRoom] = useState('');
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		context.socket.emit('list_rooms', { token });

		context.socket.on('rooms_list', (rooms) => {
			setRooms(rooms);
		});
	}, []);

	return (
		<>
			<h1>Client Testing Area</h1>
			<ul>
				{rooms &&
					rooms.map((room) => {
						return (
							<li
								key={room._id}
								style={{
									padding: '6px 8px',
									backgroundColor: 'rgba(0,0,0,0.3)',
									listStyle: 'none',
									margin: '2px',
									borderRadius: '6px',
								}}
							>
								<Link
									to={`/rooms/${room.name}`}
									state={room}
									style={{ textDecoration: 'none' }}
								>
									{room.name}
								</Link>
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default Client;
