import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineHelp } from 'react-icons/md';
import {
	AiOutlineUserAdd,
	AiOutlineLogin,
	AiOutlineLogout,
} from 'react-icons/ai';

// Theme
import { StyledNav } from '../styles/Nav.style';

// Context
import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';

const Nav = () => {
	const { userId, user } = useContext(UserContext);

	const { token } = useContext(TokenContext);

	const handleLogoutUser = async () => {
		localStorage.removeItem('id');
		localStorage.removeItem('token');
		localStorage.removeItem('roomId');

		toast.success('Logout Successful');

		setTimeout(() => {
			window.location.reload();
		}, 3000);
	};

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
							<Link
								to={`/profile/${userId}`}
								data-count={user.notifications && user.notifications.length}
								className='badge'
							>
								<AiFillHome />
							</Link>
							<Link to='#' onClick={handleLogoutUser}>
								<AiOutlineLogout />
							</Link>
						</>
					) : (
						<>
							<Link to='/signup'>
								<AiOutlineUserAdd />
							</Link>
							<Link to={`/login`}>
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
