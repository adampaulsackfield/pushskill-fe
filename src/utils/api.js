import axios from 'axios';

const pushSkillApi = axios.create({
	baseURL: 'http://localhost:9090/api',
});

export const signUpUser = (username, password) => {
	return pushSkillApi.post('/users', { username, password }).then((data) => {
		return data;
	});
};

export const logUserIn = (username, password) => {
	return pushSkillApi
		.post('/users/login', { username: username, password: password })
		.then((data) => {
			return data;
		});
};
