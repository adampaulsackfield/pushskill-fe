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
		username: '',
		password: '',
	});
	const context = useContext(TokenContext);
	const userContext = useContext(UserContext);

	const handleInputChange = (event) => {
		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleLogin = async (e) => {
		if (loginForm.username.length < 8) {
			setErrors((prev) => ({
				...prev,
				username: 'Username must be at least 8 characters long',
			}));
		}

		if (loginForm.password.length < 8) {
			setErrors((prev) => ({
				...prev,
				password: 'Password must be at least 8 characters long',
			}));
		}

		if (
			!context.token &&
			loginForm.username.length > 7 &&
			loginForm.password.length > 7
		) {
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

				{!context.token && !loginForm.password && (
					<p>enter a valid username and password</p>
				)}
			</form>
			<button onClick={(e) => handleLogin(e)}>LOGIN</button>
		</StyledLogin>
	);
};

export default Login;
