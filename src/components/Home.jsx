import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Theme
import { StyledHome } from '../styles/Home.style';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

// API
import { handleGetMatches, handleSendMatchRequest } from '../utils/api';

const Home = () => {
	const navigate = useNavigate();
	const token = useContext(TokenContext).token;
	const [users, setUsers] = useState('');
	const { user } = useContext(UserContext);

	console.log('user:', user);

	const handleJoinPair = (id, username) => {
		handleSendMatchRequest(token, id, username)
			.then((res) => {
				toast.success(`Pair request sent to: ${username}`);
			})
			.catch((err) => {
				console.log('handleSendMatchRequest: .catch()', err);
				toast.error(err?.message);
			});
	};

	useEffect(() => {
		if (token) {
			handleGetMatches(token)
				.then((users) => {
					toast.success('Matches generated');
					setUsers(users);
				})
				.catch((err) => {
					console.log('handleGetMatches: .catch()', err);
					toast.error(err?.message);
				});
		} else {
			navigate('/');
		}
	}, [token]);

	if (users && user.isPaired !== true) {
		return (
			<StyledHome>
				<main>
					<header>
						<h1>Welcome back {user.username}</h1>
					</header>
					<div>
						<h3>Here's some people we think you'll love!</h3>
						<p>
							Why not pair with one of these users and start your new learning
							journey together!
						</p>
						<ul>
							{users &&
								users.map((user) => {
									return (
										<section>
											<span
												onClick={() => handleJoinPair(user._id, user.username)}
											>
												<div>
													<img
														src={
															'https://avatars.dicebear.com/api/gridy/:seed.svg'
														}
														alt={`${user.username}'s avatar`}
													/>
													<div>
														<p>Username: {user.username}</p>
														<p>Name: {user.firstName}</p>
													</div>
													<ul>
														Traits:{' '}
														{user.traits.map((trait) => {
															return <li key={user._id + trait}>{trait}</li>;
														})}
													</ul>
												</div>
											</span>
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

	if (user && user.isPaired) {
		return (
			<div>
				<h1>Being productive today?</h1>
				<p>Checkout these resources to keep you on track...</p>
			</div>
		);
	}
};

export default Home;
