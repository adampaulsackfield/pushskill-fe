import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Theme
import { StyledProfile } from '../styles/Profile.style';

// API
import { acceptMatch, getProfile } from '../utils/api';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

import { toast } from 'react-toastify';

const Profile = () => {
	const { user_id } = useParams();
	const context = useContext(TokenContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getProfile(user_id, context).then((user) => {
			setUser(user);
		});
	}, []);

	console.log('text');

	const handleAccept = (sender_id) => {
		acceptMatch(context.token, user_id, sender_id).then((room) => {
			if (room.id) {
				return toast.success('Successfully paired!');
			} else {
				return toast.error('Error with pairing!');
			}
		});
	};

	// const handleDecline = () => {
	// 	user.isPaired = true
	// }npm

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
										<button
										// onClick={handleDecline}
										>
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
