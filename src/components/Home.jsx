import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { StyledHome } from '../styles/Home.style';

import { TokenContext } from '../context/TokenContext';
import { handleGetMatches, handleSendMatchRequest } from '../utils/api';
import { toast } from 'react-toastify';

const Home = () => {
	const navigate = useNavigate();
	const token = useContext(TokenContext).token;
	const [users, setUsers] = useState('');

	const handleJoinPair = (id, username) => {
		handleSendMatchRequest(token, id, username)
			.then((res) => {
				console.log('handleSendMatchRequest: .then()', res);

				toast.success(`Pair request sent to: ${username}`);
				// localStorage.setItem('roomId', res.room._id);
				// navigate('/partner');
			})
			.catch((err) => {
				console.log('handleSendMatchRequest: .catch()', err);
				toast.danger(err?.message);
			});
	};

	useEffect(() => {
		if (token) {
			handleGetMatches(token)
				.then((res) => {
					console.log('handleGetMatches: .then()', res);

					toast.success('Matches generated');
					setUsers(res.users);
				})
				.catch((err) => {
					console.log('handleGetMatches: .catch()', err);
					toast.danger(err?.message);
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
							LOGOUT
						</button>
					</header>
					<div>
						<h3>Here's some people we think you'll love!</h3>
						<ul>
							{users &&
								users.map((user) => {
									return (
										<section>
											<button
												onClick={() => handleJoinPair(user._id, user.username)}
											>
												Send Pair Request
											</button>
											<Link to='/partner'>
												<li key={user._id}>
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
																	return (
																		<li key={user._id + trait}>{trait}</li>
																	);
																})}
															</ul>
														</div>
													</div>
												</li>
											</Link>
										</section>
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
