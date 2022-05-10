import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineHelp } from 'react-icons/md';
import { AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai';

// Theme
import { StyledNav } from '../styles/Nav.style';

// Context
import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';

const Nav = () => {
	const { userId } = useContext(UserContext);
	const { token } = useContext(TokenContext);

	return (
		<StyledNav>
			<nav>
				<div>
					<Link to='/home'>
						<AiFillHome />
					</Link>
					{token ? (
						<>
							<Link to='/partner'>
								<FaUserFriends />
							</Link>
							<Link to={`/profile/${userId}`}>
								<AiFillHome />
							</Link>
						</>
					) : (
						<>
							<Link to='/signup'>
								<AiOutlineUserAdd />
							</Link>
							<Link to={`/login/`}>
								<AiOutlineLogin />
							</Link>
						</>
					)}

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
