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
				<form>
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
					/>

					<button
						onMouseOver={(e) => {
							if (!token) {
								logUserIn(username, password).then(({ data }) => {
									setToken(data.user.token);
								});
							}
						}}
					>
						<Link to={token && '/home'}>Login</Link>
					</button>
				</form>
			</main>
		</StyledLogin>
	);
};

export default Login;
