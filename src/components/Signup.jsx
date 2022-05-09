import { useState, useContext } from 'react';
import { StyledSignup } from '../styles/Signup.style';
import { signUpUser } from '../utils/api';
import { toast } from 'react-toastify';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import { logUserIn } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const notify = () => {
		if (!signUpForm.password) {
			toast('Please enter a password!');
		} else if (signUpForm.password !== signUpForm.confirmPassword) {
			toast('Make sure both passwords match!');
		} else if (signUpForm.password === signUpForm.confirmPassword) {
			toast('Thanks for signing up!');
		}
	};
	const [learningInterests, setLearningInterests] = useState('Knitting');
	const [traits, setTraits] = useState('Supportive');

	const [signUpForm, setSignUpForm] = useState({
		username: '',
		password: '',
		confirmPassword: '',
		avatarUrl: '',
	});

	const handleInterests = (e) => {
		setLearningInterests(e.target.value);
	};
	const handleTraits = (e) => {
		setTraits(e.target.value);
	};

	const handleInputChange = (event) => {
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const context = useContext(TokenContext);
	const userContext = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<StyledSignup>
			<h2>Sign up</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					signUpUser(signUpForm, traits, learningInterests).then((userData) => {
						console.log(userData + 'userdata');
						logUserIn(signUpForm).then(({ data }) => {
							context.setToken(data.user.token);
							userContext.setUser(data.user);
						});
					});
					navigate('/home');
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
				<input
					name='avatarUrl'
					type='input'
					placeholder='Avatar Url:'
					value={signUpForm.avatarUrl}
					onChange={(e) => handleInputChange(e)}
				/>
				<div>
					<label>Learning interests: </label>
					<select onChange={handleInterests}>
						<option value='Knitting'>Knitting</option>
						<option value='Karate'>Karate</option>
						<option value='Interpretive Dance'>Interpretive Dance</option>
					</select>
					<label>Personal Traits: </label>
					<select onChange={handleTraits}>
						<option value='Supportive'>Supportive</option>
						<option value='Empathetic'>Empathetic</option>
						<option value='Super Violent'>Super Violent</option>
					</select>
				</div>
				<button onClick={notify}>Sign Up</button>
			</form>
		</StyledSignup>
	);
};

export default Signup;
