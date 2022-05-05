import { useState } from 'react';
import { StyledLogin } from '../styles/Login.style';
import { logUserIn } from '../utils/api';
import { Link } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');
	console.log(token);
	return (
		<StyledLogin>
			<main>
				<h2>Login</h2>
				<form action={'/home'}>
					<input
						type='text'
						required
						placeholder='Username:'
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
					<input
						type='password'
						required
						placeholder='Password:'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						onBlur={() => {
							logUserIn(username, password).then(({ data }) => {
								setToken(data.user.token);
							});
						}}
					/>
					{token(
						<button
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							Login
						</button>
					)}
				</form>
			</main>
		</StyledLogin>
	);
};

export default Login;
