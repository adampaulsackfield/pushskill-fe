import { useState } from 'react';
import { StyledLogin } from '../styles/Login.style';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<StyledLogin>
			<main>
				<div>
					<h2>Login</h2>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
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
						<button>Login</button>
					</form>
				</div>
			</main>
		</StyledLogin>
	);
};

export default Login;
