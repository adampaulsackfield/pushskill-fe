import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Nav.style';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineHelp } from 'react-icons/md';
import { UserContext } from '../context/UserContext';

const Nav = () => {
	const context = useContext(UserContext);
	return (
		<StyledNav>
			<nav>
				<div>
					<Link to='/home'>
						<AiFillHome />
					</Link>
					<Link to='/partner'>
						<FaUserFriends />
					</Link>
					<Link to={`/profile/${context.user.id}`}>
						<AiFillHome />
					</Link>
					<Link to='/about'>
						<AiFillInfoCircle />
					</Link>
					<Link to='/faq'>
						<MdOutlineHelp />
					</Link>
				</div>
			</nav>
		</StyledNav>
	);
};

export default Nav;
