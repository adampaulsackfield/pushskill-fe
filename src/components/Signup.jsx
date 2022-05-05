import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';
import { signUpUser } from '../utils/api';

const Signup = () => {
	const [signUpForm, setSignUpForm] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (event) => {
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<StyledSignup>
			<main>
				<h2>Sign up</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						signUpUser(signUpForm.username, signUpForm.password).then(
							(userData) => {
								console.log(userData + 'userdata');
							}
						);
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
			</main>
		</StyledSignup>
	);
};

export default Signup;
