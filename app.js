const argv = require('./config/argv').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const direccion = argv.direction;

lugar.getLugarLatLong(direccion).then(async (x) => {
	const temp = await clima.getClima(x.lat, x.lon);
	console.log(`El Clima de ${x.name} ubicada en ${x.lat} & ${x.lon} es de ${temp}`);
});
