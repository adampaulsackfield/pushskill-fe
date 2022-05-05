import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<StyledSignup>
			<section>
				<h2>Sign up here:</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<label for='username' />
					Username:
					<input
						type='text'
						required
						placeholder='Username'
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
					<label for='username' />
					Password:
					<input
						type='text'
						required
						placeholder='Password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button>Sign Up</button>
				</form>
			</section>
		</StyledSignup>
	);
};

export default Signup;
