import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';

const Signup = () => {
	const [signUpForm, setSignUpForm] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});
	// const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('');
	// const [confirmPassword, setConfirmPassword] = useState('');

	const handleInputChange = (event) => {
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<StyledSignup>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					name='username'
					type='text'
					required
					placeholder='Username:'
					value={signUpForm.username}
					onChange={(e) => handleInputChange(e)}
				/>
				<input
					name='password'
					type='password'
					required
					placeholder='Password:'
					value={signUpForm.password}
					onChange={(e) => handleInputChange(e)}
				/>
				<input
					name='confirmPassword'
					type='password'
					required
					placeholder='Confirm Password:'
					value={signUpForm.confirmPassword}
					onChange={(e) => handleInputChange(e)}
				/>
				<button>Sign Up</button>
			</form>
		</StyledSignup>
	);
};

export default Signup;
