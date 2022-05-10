import axios from 'axios';

const pushSkillApi = axios.create({
	// baseURL: 'https://pushskill.herokuapp.com/api',
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
				traits: [traits],
				learningInterests: [learningInterests],
			})
			.then((data) => {
				console.log(data);
				return data;
			})
			.catch((err) => {
				return err.response.data;
			});
	}
};

export const logUserIn = ({ username, password }) => {
	return pushSkillApi
		.post('/users/login', { username: username, password: password })
		.then((data) => {
			return data;
		})
		.catch((err) => {
			return err.response.data;
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

export const handleSendMatchRequest = (token, id) => {
	return pushSkillApi
		.get(`/users/matches/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const handleGetMatches = (token) => {
	return pushSkillApi
		.get('/users/matches', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const getRooms = (token, roomId) => {
	return pushSkillApi
		.get(`http://localhost:9090/api/rooms`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data.rooms[0];
		})
		.catch((err) => {
			console.log('getRooms: .catch()', err);
			return err;
		});
};
