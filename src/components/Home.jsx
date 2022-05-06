import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { RoomsContext } from '../context/RoomsContext';
import { SocketContext } from '../context/SocketContext';
import { TokenContext } from '../context/TokenContext';
import { StyledHome } from '../styles/Home.style';

const Home = () => {
	const token = useContext(TokenContext).token;
	const {rooms, setRooms} = useContext(RoomsContext)
	const [users, setUsers] = useState('');
	const socket = useContext(SocketContext).socket

	useEffect(() => {
		if (token) {
			axios
				.get('http://localhost:9090/api/users', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(({ data }) => setUsers(data.users));
		}
		socket.emit('list_rooms', {token})

		socket.on('rooms_list', (data) => {
			setRooms(data[0])
		})
	}, [token]);

	if(users) {return (
		<StyledHome>
			<main>
				<header>
					<h1>Welcome back $User</h1>
				</header>
				<div>
					<h3>Here's some people we think you'll love!</h3>
					{users &&
						users.map((user) => {
							return (
								<section>
									<div>
										<img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
                                        <span></span>
										<div>
											<p>Username: {user.username}</p>
											<p>Name: {user.firstName}</p>
											<ul>
												{user.traits.map((trait) => {
													return <li key={user.id}>Trait: {trait}</li>;
												})}
											</ul>
										</div>
									</div>
								</section>
							);
						})}
				</div>
			</main>
		</StyledHome>
	)
    } else if(!token) {
        return <h1>You must login to see this page!</h1>
    }
}

export default Home;
