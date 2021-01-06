const direction = { alias: 'd', desc: 'Direccion de la ciudad para obtener el clima', demand: true };

const argv = require('yargs').options({ direction }).argv;

module.exports = { argv };
