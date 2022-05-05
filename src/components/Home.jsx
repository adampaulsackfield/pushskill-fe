import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { TokenContext } from '../context/TokenContext';
import { StyledHome } from '../styles/Home.style';

const Home = () => {
	const context = useContext(TokenContext);
	const [users, setUsers] = useState('');

	useEffect(() => {
		console.log('token', context);
		if (context.token) {
			axios
				.get('http://localhost:9090/api/users', {
					headers: {
						Authorization: `Bearer ${context.token}`,
					},
				})
				.then(({ data }) => setUsers(data.users));
		}
	}, [context]);

	console.log('users:', users);

	if(users) {return (
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
										<img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
                                        <span></span>
										<div>
											<p>Username: {user.username}</p>
											<p>Name: {user.firstName}</p>
											<ul>
												{user.traits.map((trait) => {
													return <li key={trait}>Trait: {trait}</li>;
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
    } else if(!context.token) {
        return <h1>You must login to see this page!</h1>
    }
};

export default Home;
