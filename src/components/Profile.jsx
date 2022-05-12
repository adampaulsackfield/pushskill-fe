import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// Theme
import { StyledProfile } from '../styles/Profile.style';

// API
import {
	getProfile,
	acceptMatch,
	declineMatch,
	addAchievement,
} from '../utils/api';

// Context
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

const Profile = () => {
	const navigate = useNavigate();
	const { user_id } = useParams();
	const { token } = useContext(TokenContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		if (user_id && token) {
			getProfile(user_id, token).then((user) => {
				setUser(user);
			});
		}
	}, []);

	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	});

	const handleAccept = (sender_id) => {
		acceptMatch(token, user_id, sender_id)
			.then((room) => {
				if (room.id) {
					return toast.success('Successfully paired!');
				}
			})
			.then(() => {
				addAchievement(
					token,
					{
						name: 'Partnered',
						description: 'This is a description',
						url: '',
					},
					sender_id,
					{ both: true }
				).then((user) => {
					console.log(user);
				});
			});
	};

	const handleDecline = (sender_id) => {
		declineMatch(token, user_id, sender_id)
			.then((message) => {
				console.log('mess', message);
				return toast.success(`${message}`);
			})
			.catch((err) => {
				console.log('Profile.jsx: handleDecline .catch()', err);
			});
	};

	const handleGiveAchievement = (achievement, sender_id, both) => {
		console.log('ran');
		addAchievement(token, achievement, sender_id, { both }).then((res) => {
			console.log(res);
		});
	};

	return (
		<StyledProfile>
			<section>
				<img src={user && user.avatarUrl} alt='user avatar' />
				<h1>{user && user.username}</h1>
				<div>
					<div>
						<p>
							<span>Traits: </span>
							{user.traits && user.traits.map((trait) => trait)}
						</p>
						<p>
							<span>Interests: </span>
							{user.learningInterests &&
								user.learningInterests.map((interest) => interest)}
						</p>
					</div>
				</div>
				<div className='achievements'>
					<p>
						<span>Achievements: </span>
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
												alt={`${achievement.name} icon`}
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
				<div className='achievements-container'>
					<h3>Award Some Achievements</h3>
					{user.isPaired && (
						<ul className='achievements add-achievements'>
							<li
								key={223242}
								onClick={() =>
									handleGiveAchievement(
										{
											name: 'Supporter',
											description: 'Support description to come...',
											url: '/images/achievements/Supporter.png',
										},
										user.partnerId,
										{ both: true }
									)
								}
							>
								<img src={`/images/achievements/Supporter.png`} alt={`icon`} />
							</li>

							<li
								key={3232323}
								onClick={() =>
									handleGiveAchievement(
										{
											name: 'Unruly',
											description: 'Support description to come...',
											url: '/images/achievements/Unruly.png',
										},
										user.partnerId,
										{ both: true }
									)
								}
							>
								<img src={`/images/achievements/Unruly.png`} alt={` icon`} />
							</li>
						</ul>
					)}
				</div>
			</section>
		</StyledProfile>
	);
};

export default Profile;
