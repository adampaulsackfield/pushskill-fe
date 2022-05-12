import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	AiFillHome,
	AiFillInfoCircle,
	AiOutlineUserAdd,
	AiOutlineLogin,
} from 'react-icons/ai';
import { FaUserFriends, FaUserGraduate } from 'react-icons/fa';
import { RiLogoutCircleRFill } from 'react-icons/ri';

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
								data-count={
									user.notifications && user.notifications.length > 0
										? user.notifications.length
										: null
								}
								className='badge'
							>
								<FaUserGraduate />
							</Link>
							<Link to='#' onClick={handleLogoutUser}>
								<RiLogoutCircleRFill />
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
				</div>
			</nav>
		</StyledNav>
	);
};

export default Nav;
