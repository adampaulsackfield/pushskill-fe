import axios from 'axios';

const pushSkillApi = axios.create({
	baseURL: 'http://localhost:9090/api',
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
				traits,
				learningInterests,
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
	const token = context.token;
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
