import { useEffect, useState, useContext } from 'react';
import { StyledProfile } from '../styles/Profile.style';
import { useParams } from 'react-router-dom';
import { getProfile } from '../utils/api';
import { TokenContext } from '../context/TokenContext';

export const Profile = () => {
	const { user_id } = useParams();
	const context = useContext(TokenContext);
	const [user, setUser] = useState({});
	const UserContext = useContext(TokenContext);

	console.log(UserContext);
	useEffect(() => {
		getProfile(user_id, context).then((user) => {
			setUser(user.data.user);
		});
	}, []);
	console.log(user);
	return (
		<StyledProfile>
			<section>
				<div className='card'>
					<img src={user.avatarUrl} alt='' />
					<div className='card-desials'>
						<h4>{user.username}</h4>
						{/* <small>Traits: {user.traits.map(trait => trait)}</small>
                    <small>Interests: {user.learningInterests.map(interest => interest)}</small> */}
						{/* <small>Achievements: {user.achievements.map(achievement => achievement.name && achievement.description)}</small> */}
					</div>
				</div>
				<div className='achievements'>
					<img src={require('../images/award.png')} alt='' />
					<img src={require('../images/award.png')} alt='' />
					<img src={require('../images/award.png')} alt='' />
					<img src={require('../images/award.png')} alt='' />
					<img src={require('../images/award.png')} alt='' />
				</div>
			</section>
		</StyledProfile>
	);
};
