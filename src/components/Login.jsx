import { useState, useContext } from 'react';
import { StyledLogin } from '../styles/Login.style';
import { logUserIn } from '../utils/api';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

const Login = () => {
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: '',
	});

	const context = useContext(TokenContext);
	// context.token
	// context.setToken

	console.log(context.token);

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

					<button
						onMouseOver={(e) => {
							if (!context.token) {
								logUserIn(loginForm).then(({ data }) => {
									context.setToken(data.user.token);
								});
							}
						}}
					>
						<Link to={context.token && '/home'}>Login</Link>
					</button>
				</form>
		</StyledLogin>
	);
};

export default Login;
