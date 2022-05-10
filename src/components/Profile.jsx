import { useEffect, useState, useContext } from 'react';
import { StyledProfile } from '../styles/Profile.style';
import { useParams } from 'react-router-dom';
import { getProfile } from '../utils/api';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

export const Profile = () => {
	const { user_id } = useParams();
	const context = useContext(TokenContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getProfile(user_id, context).then(({ data }) => {
			setUser(data.user);
		});
	}, []);

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
						{/* <img
							src={require(`../images/achievements/${user.achievements.map(
								(achievement) => achievement.url
							)}.png`)}
							alt='achievement'
						/> */}
					</div>
				</div>
			</section>
		</StyledProfile>
	);
};
