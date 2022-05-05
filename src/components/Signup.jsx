import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';
import { signUpUser } from '../utils/api';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<StyledSignup>
			<main>
				<h2>Sign up</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						signUpUser(username, password).then((userData) => {
							console.log(userData + 'userdata');
						});
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
					<input
						type='password'
						required
						placeholder='Confirm Password:'
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
					/>
					<button>Sign Up</button>
				</form>
			</main>
		</StyledSignup>
	);
};

export default Signup;
