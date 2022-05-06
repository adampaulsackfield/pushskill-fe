import { useState } from 'react';
import { StyledSignup } from '../styles/Signup.style';
import { signUpUser } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
	const notify = () => toast("Thanks for signing up!");

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
				<h2>Sign up</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						signUpUser(signUpForm).then((userData) => {
							console.log(userData + 'userdata');
						});
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
					<button onClick={notify}>Sign Up</button>
					<ToastContainer />
				</form>
		</StyledSignup>
	);
};

export default Signup;
