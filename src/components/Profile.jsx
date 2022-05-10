import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// Theme
import { StyledProfile } from '../styles/Profile.style';

// API
import { getProfile, acceptMatch, declineMatch } from '../utils/api';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

const Profile = () => {
	const { user_id } = useParams();
	const context = useContext(TokenContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getProfile(user_id, context).then((user) => {
			setUser(user);
		});
	}, []);

	const handleAccept = (sender_id) => {
		acceptMatch(context.token, user_id, sender_id).then((room) => {
			if (room.id) {
				return toast.success('Successfully paired!');
			} else {
				return toast.error('Error with pairing!');
			}
		});
	};

	const handleDecline = (sender_id) => {
		declineMatch(context.token, user_id, sender_id)
			.then((message) => {
				console.log('mess', message);
				return toast.success(`${message}`);
			})
			.catch((err) => {
				console.log('Profile.jsx: handleDecline .catch()', err);
			});
	};

	return (
		<StyledProfile>
			<section>
				<h1>{user && user.username}</h1>
				<div className='card'>
					<img src={user && user.avatarUrl} alt='' />
					<div className='card-detials'>
						<p>
							<span>Traits: </span>{' '}
							{user.traits && user.traits.map((trait) => trait)}
						</p>
						<p>
							<span>Interests: </span>{' '}
							{user.learningInterests &&
								user.learningInterests.map((interest) => interest)}
						</p>
					</div>
				</div>
				<div className='achievements'>
					<p>
						<span>Achievements:</span>{' '}
						{user.achievements &&
							user.achievements.map(
								(achievement) => achievement.name && achievement.description
							)}
					</p>

					<div>
						<ul>
							{user.achievements &&
								user.achievements.map((achievement) => {
									return (
										<li key={achievement.id}>
											<img
												src={`/images/achievements/${achievement.name}.png`}
											/>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
				<div>
					<ul>
						{user.notifications &&
							user.notifications.map((notification) => {
								return (
									<li key={notification.id}>
										<h3>{`${notification.username} wants to pair up`}</h3>
										<button onClick={() => handleAccept(notification.user_id)}>
											Accept
										</button>
										<button onClick={() => handleDecline(notification.user_id)}>
											Decline
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</section>
		</StyledProfile>
	);
};

export default Profile;
