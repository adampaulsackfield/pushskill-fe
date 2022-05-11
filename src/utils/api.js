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

export const getProfile = (user_id, token) => {
	return pushSkillApi
		.get(`/users/${user_id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data.user;
		});
};

export const handleSendMatchRequest = (token, id, username) => {
	console.log(token);
	return pushSkillApi
		.post(
			`/users/matches/${id}`,
			{ username },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
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
			return res.data.users;
		})
		.catch((err) => {
			return err;
		});
};

export const getRooms = (token) => {
	return pushSkillApi
		.get(`/rooms`, {
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

export const getMessages = (token, roomId) => {
	return pushSkillApi
		.get(`/rooms/${roomId}/messages`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data.messages;
		})
		.catch((err) => {
			return err;
		});
};

// ACCEPT MATCH
export const acceptMatch = (token, user_id, sender_id) => {
	return pushSkillApi
		.patch(
			`/users/matches/${user_id}`,
			{ sender_id },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		.then((res) => {
			console.log('res', res);
			return res.data.room;
		})
		.catch((err) => {
			console.log('acceptMatch', err);
			return err;
		});
};

export const declineMatch = (token, user_id, sender_id) => {
	return pushSkillApi
		.patch(
			`/users/matches/${user_id}/decline`,
			{ sender_id },
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then((res) => {
			console.log('declineMatch', res);
			return res.data.message;
		})
		.catch((err) => {
			console.log('declineMatch', err);
			return err;
		});
};

export const addAchievement = (token, achievement, sender_id) => {
	console.log('ran addAchievement', token);
	return pushSkillApi
		.patch(
			`/users/${sender_id}/achievements`,
			{ achievement, both: true },
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then((res) => {
			console.log('addAchievement', res.data.user);
			return res.data.user;
		})
		.catch((err) => {
			console.log('addAchievement', err);
			return err;
		});
};
