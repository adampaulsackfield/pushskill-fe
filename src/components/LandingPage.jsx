import { Link } from 'react-router-dom';
import { StyledLanding } from '../styles/Landing.style';

import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const onConfirm = () => {
	if (window.confirm(`Do you want to pair with ...`)) {
		alert("Thanks for pairing!");
	}
}


const LandingPage = () => {
	const userContext = useContext(UserContext);
	console.log('user:', userContext)

	return (
		<StyledLanding>
				<section>
					<div id='heading'>
						<button onClick={onConfirm}> TEST </button>
						<h1>Welcome to <span>.push(skill)</span></h1>
					</div>
					<div id='signup-details'>
						<h3>Things look a bit empty here...</h3>
						<p>Sign up for free today!</p>
						<p>Already have an account? <Link to='/login'><span>Login now!</span></Link></p>
					</div>
					<div id='content'>						
						<div>
							<Link to='/signup'><button>Sign up</button></Link><Link to='/login'><button>Login</button></Link>
						</div>
					</div>
				</section>
		</StyledLanding>
	);
};

export default LandingPage;
