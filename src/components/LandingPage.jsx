import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Theme
import { StyledLanding } from '../styles/Landing.style';

// Context
import { TokenContext } from '../context/TokenContext';

const LandingPage = () => {
	const navigate = useNavigate();
	const { token } = useContext(TokenContext);

	useEffect(() => {
		if (token) {
			navigate('/home');
		}
	}, [token]);

	return (
		<StyledLanding>
			<section>
				<div id='heading'>
					<h1>
						Welcome to <span>.push(skill)</span>
					</h1>
				</div>
				<div id='signup-details'>
					<h3>Things look a bit empty here...</h3>
					<p>Sign up for free today!</p>
					<p>
						Already have an account?{' '}
						<Link to='/login'>
							<span>Login now!</span>
						</Link>
					</p>
				</div>
				<div id='content'>
					<div>
						<Link to='/signup'>
							<button>Sign up</button>
						</Link>
						<Link to='/login'>
							<button>Login</button>
						</Link>
					</div>
				</div>
			</section>
		</StyledLanding>
	);
};

export default LandingPage;
