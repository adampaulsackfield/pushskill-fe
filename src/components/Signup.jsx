import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<StyledSignup>
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
		</StyledSignup>
	);
};

export default Signup;
