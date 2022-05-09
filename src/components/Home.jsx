import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { StyledHome } from '../styles/Home.style';

import { TokenContext } from '../context/TokenContext';

const Home = () => {
	const navigate = useNavigate();
	const token = useContext(TokenContext).token;
	const [users, setUsers] = useState('');

	const handleJoinPair = (id) => {
		axios
			.get(`https://pushskill.herokuapp.com/api/users/matches/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log('data***', res.data.room);
				localStorage.setItem('roomId', res.data.room._id);
				navigate(`/partner`);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	useEffect(() => {
		if (token) {
			axios
				.get('https://pushskill.herokuapp.com/api/users/matches', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					console.log('here we are');
					setUsers(res.data.users);
					console.log(users);
				})
				.catch((err) => {
					console.log('here we are 2');
					console.log(err);
				});
		}
	}, [token]);

	if (users) {
		return (
			<StyledHome>
				<main>
					<header>
						<h1>Welcome back $User</h1>

						<button
							onClick={() => {
								localStorage.removeItem('token');
								localStorage.removeItem('id');
								localStorage.removeItem('roomId');
							}}
						>
							LOGOUT - TEMP FOR DEV PURPOSES
						</button>
					</header>
					<div>
						<h3>Here's some people we think you'll love!</h3>
						<ul>
							{users &&
								users.map((user) => {
									return (
										<li key={user._id}>
											<section>
												<div>
													<img
														src={user.avatarUrl}
														alt={`${user.username}'s avatar`}
													/>
													<span></span>
													<div>
														<p>Username: {user.username}</p>
														<p>Name: {user.firstName}</p>
														<ul>
															Traits:{' '}
															{user.traits.map((trait) => {
																return <li key={user._id + trait}>{trait}</li>;
															})}
														</ul>

														<button onClick={() => handleJoinPair(user._id)}>
															Pair
														</button>
													</div>
												</div>
											</section>
										</li>
									);
								})}
						</ul>
					</div>
				</main>
			</StyledHome>
		);
	} else if (!token) {
		return <h1>You must login to see this page!</h1>;
	}
};

export default Home;
