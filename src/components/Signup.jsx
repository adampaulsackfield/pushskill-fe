import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Theme
import { StyledSignup } from '../styles/Signup.style';

// API
import { signUpUser } from '../utils/api';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

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
	const [errors, setErrors] = useState({
		username: null,
		password: null,
		confirmPassword: null,
	});

	const handleInterests = (e) => {
		setLearningInterests(e.target.value);
	};

	const handleTraits = (e) => {
		setTraits(e.target.value);
	};

	const handleInputChange = (event) => {
		if (signUpForm.username.length <= 7) {
			setErrors((prev) => ({
				...prev,
				username: 'Username must be at least 8 characters long',
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				username: null,
			}));
		}

		if (signUpForm.password.length <= 7) {
			setErrors((prev) => ({
				...prev,
				password: 'Password must be at least 8 characters long',
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				password: null,
			}));
		}

		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		if (signUpForm.password === signUpForm.confirmPassword) {
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
		} else {
			setErrors((prev) => ({
				...prev,
				confirmPassword: 'Passwords do not match',
			}));
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
				<p>{errors.username}</p>

				<input
					name='password'
					type='password'
					required
					placeholder='Password:'
					value={signUpForm.password}
					onChange={(e) => handleInputChange(e)}
				/>
				<p>{errors.password}</p>

				<input
					name='confirmPassword'
					type='password'
					required
					placeholder='Confirm Password:'
					value={signUpForm.confirmPassword}
					onChange={(e) => handleInputChange(e)}
				/>
				<p>{errors.confirmPassword}</p>

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

				<button
					onClick={(e) => handleSignUp(e)}
					disabled={
						errors.username || errors.password || errors.confirmPassword
					}
					style={
						errors.username || errors.password || errors.confirmPassword
							? { cursor: 'not-allowed' }
							: { cursor: 'pointer' }
					}
				>
					Sign Up
				</button>
			</form>
		</StyledSignup>
	);
};

export default Signup;
