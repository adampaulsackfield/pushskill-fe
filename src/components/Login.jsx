import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Theme
import { StyledLogin } from '../styles/Login.style';

// API
import { logUserIn } from '../utils/api';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

const Login = () => {
	const navigate = useNavigate();
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		username: null,
		password: null,
	});
	const context = useContext(TokenContext);
	const userContext = useContext(UserContext);

	const handleInputChange = (event) => {
		if (!loginForm.username) {
			setErrors((prev) => ({
				...prev,
				username: "User can't be empty",
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				username: null,
			}));
		}

		if (!loginForm.password) {
			setErrors((prev) => ({
				...prev,
				password: "Password can't be empty",
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				password: null,
			}));
		}

		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleLogin = async (e) => {
		if (!context.token) {
			const res = await logUserIn(loginForm);
			if (res.message) {
				toast.warning(res.message);
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
		}
	};

	return (
		<StyledLogin>
			<h2>Login</h2>
			<form>
				<input
					name='username'
					type='text'
					required
					placeholder='Username:'
					value={loginForm.username}
					onChange={(e) => handleInputChange(e)}
				/>
				<p>{errors.username}</p>

				<input
					name='password'
					type='password'
					required
					placeholder='Password:'
					value={loginForm.password}
					onChange={(e) => handleInputChange(e)}
				/>
				<p>{errors.password}</p>
			</form>
			<button
				onClick={(e) => handleLogin(e)}
				disabled={errors.username || errors.password}
				style={
					errors.username || errors.password
						? { cursor: 'not-allowed' }
						: { cursor: 'pointer' }
				}
			>
				LOGIN
			</button>
		</StyledLogin>
	);
};

export default Login;
