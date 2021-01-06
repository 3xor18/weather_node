const apiKey = '85f4f30074fdc91f3f303deec21f83e7';
const axios = require('axios');

const getClima = async (lat, lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
	return resp.data.main.temp;
};

module.exports = {
	getClima,
};
