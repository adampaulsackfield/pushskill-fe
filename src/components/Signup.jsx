import { useState, useContext } from 'react';
import { StyledSignup } from '../styles/Signup.style';
import { signUpUser } from '../utils/api';
import { toast } from 'react-toastify';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [learningInterests, setLearningInterests] = useState('Knitting');
	const [traits, setTraits] = useState('Supportive');
	const context = useContext(TokenContext);
	const userContext = useContext(UserContext);

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

	const handleSignUp = async (e) => {
		e.preventDefault();
		if (!signUpForm.username || !signUpForm.password) {
			return toast.warning('Please complete all required fields');
		}

		if (signUpForm.password !== signUpForm.confirmPassword) {
			return toast.warning('Passwords do not match');
		}

		const res = await signUpUser(signUpForm, traits, learningInterests);

		if (res.message) {
			toast.warning(res.data.user.message);
		} else {
			context.setToken(res.data.user.token);
			userContext.setUser(res.data.user);
			userContext.setUserId(res.data.user.id);
			localStorage.setItem('id', res.data.user.id);
			localStorage.setItem('token', res.data.user.token);
			localStorage.setItem('roomId', res.data.user?.roomId);

			toast.success(`Hi ${res.data.user.username}`);

			navigate('/home');
		}
	};

	return (
		<StyledSignup>
			<h2>Sign up</h2>
			<form>
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
				<button onClick={(e) => handleSignUp(e)}>Sign Up</button>
			</form>
		</StyledSignup>
	);
};

export default Signup;
