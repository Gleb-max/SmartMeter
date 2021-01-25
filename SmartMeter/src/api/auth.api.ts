import Axios from 'axios';

type LoginResponse = {
};
export function sendSmsCode(phoneNumber: string) {
	return Axios.post<LoginResponse>('', {
		phoneNumber,
	});
}

type VerifySmsCodeResponse = {
	token: string;
}
export function verifySmsCode(code: string) {
	return Axios.post<VerifySmsCodeResponse>('', {
		code,
	});
}

const instance = Axios.create({
	baseURL: 'https://smartmetr.glitch.me',
	method: 'GET',
	headers: { 'Authorization': 'Authorization 123' },
});
instance.get('/api/v1/users/analytics?idSensor=123&mode=day', {
	timeout: 5000,
})
	.catch((er) => {
		console.log(er);
	}).then((res) => {
		if (res)
			console.log(res.data.result[0].value);
	});

