import axios from 'axios';

const pushSkillApi = axios.create({
	baseURL: 'http://localhost:3000/api',
});

export const signUpUser = (
	{ username, password, confirmPassword, avatarUrl },
	traits,
	learningInterests
) => {
	if (password === confirmPassword) {
		return pushSkillApi
			.post('/users', {
				username,
				password,
				avatarUrl,
				traits: [traits],
				learningInterests: [learningInterests],
			})
			.then((data) => {
				return data;
			});
	}
};

export const logUserIn = ({ username, password }) => {
	return pushSkillApi
		.post('/users/login', { username: username, password: password })
		.then((data) => {
			return data;
		});
};

export const getProfile = (user_id, context) => {
	return pushSkillApi
		.get(`/users/${user_id}`, {
			headers: {
				Authorization: `Bearer ${context.token}`,
			},
		})
		.then((user) => {
			return user;
		});
};

export const getMatches = (token) => {
	return pushSkillApi
		.get('/api/users/matches', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((users) => {
			console.log('us', users);
			return users;
		})
		.catch((err) => {
			return 'Failed to get matches';
		});
};
