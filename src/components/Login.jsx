import { useState, useContext } from 'react';
import { StyledLogin } from '../styles/Login.style';
import { logUserIn } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

const Login = () => {
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: '',
	});
	const navigate = useNavigate()
	const context = useContext(TokenContext);

	const handleInputChange = (event) => {
		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
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
				<input
					name='password'
					type='password'
					required
					placeholder='Password:'
					value={loginForm.password}
					onChange={(e) => handleInputChange(e)}
				/>

				{!context.token && loginForm.password && (
					<p>enter a valid username and password</p>
				)}

				<button
					onClick={(e) => {
						// e.preventDefault();
						if (!context.token) {
							logUserIn(loginForm).then(({ data }) => {
								context.setToken(data.user.token);
							});
							navigate('/home')
						}
					}}
				>LOGIN
				</button>
			</form>
		</StyledLogin>
	);
};

export default Login;
