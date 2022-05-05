import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { TokenContext } from '../context/TokenContext';
import { StyledHome } from '../styles/Home.style';

const Home = () => {
	const context = useContext(TokenContext);
	const [users, setUsers] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:9090/api/users', {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			})
			.then(({ data }) => setUsers(data.users));
	}, []);

	console.log('users:', users);

	return (
		<StyledHome>
			<main>
				<header>
					<h1>Welcome back {'${user}'}</h1>
				</header>
				<div>
					<h3>Here's some people we think you'll love!</h3>
					{users &&
						users.map((user) => {
							return (
								<section>
									<div>
										<img src={user.avatarUrl} alt='cat' />
										<div>
											<p>{user.username}</p>
											<p>{user.firstName}</p>
											<ul>
												{user.traits.map((trait) => {
													return <li>{trait}</li>;
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
	);
};

export default Home;
