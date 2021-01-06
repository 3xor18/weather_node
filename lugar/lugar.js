const axios = require('axios');

const getLugarLatLong = async (direccion) => {
	const condeUrl = encodeURI(direccion);

	const instance = axios.create({
		baseURL: `http://api.weatherapi.com/v1/current.json?q=${condeUrl}`,
		headers: {
			key: 'b50a77923b9d47d69dd170146210501',
		},
	});

	const res = await instance.get();

	if (!res.data.location) throw new Error(`Error en la consulta [${direccion}]`);
	const data = res.data.location;
	const name = data.name;
	const lat = data.lat;
	const lon = data.lon;
	return { name, lat, lon };
};

module.exports = {
	getLugarLatLong,
};
