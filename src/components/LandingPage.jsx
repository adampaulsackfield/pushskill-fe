import { Link } from 'react-router-dom';
import { StyledLanding } from '../styles/Landing.style';

const LandingPage = () => {
	return (
		<StyledLanding>
			<main>
				<div id='container'>
					<div id='heading'>
						<h1>Welcome to</h1>
						<h1 id='accentHead'>.push(skill)</h1>
					</div>
					<div id='content'>
						<img
							src={require('../images/achievements/The Completionist.png')}
						/>
						<p>
							<Link to='/signup'>Sign up</Link> /<Link to='/login'> Login</Link>
						</p>
					</div>
				</div>
			</main>
		</StyledLanding>
	);
};

export default LandingPage;
