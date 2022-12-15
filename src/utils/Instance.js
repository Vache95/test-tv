import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.tvmaze.com',
	headers: {
		'Content-Type': 'application/json',
	},
	params: {},
});
instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	res => {
		return res;
	},
	async err => {
		return Promise.reject(err);
	}
);
export default instance;
