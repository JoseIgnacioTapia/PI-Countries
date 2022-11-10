const { Country, Activity } = require('../db.js');
const axios = require('axios');

const URL = 'https://restcountries.com/v3/all';

// Fetch all countries and store them in the database.
const getApiCountries = async () => {
  try {
    const response = await axios.get(URL);

    let allCountries = response.data.map(item => ({
      id: item.cca3,
      name: item.name.common,
      flag: item.flags[0],
      continent: item.continents[0],
      capital: item.capital != null ? item.capital[0] : 'no information',
      subregion: item.subregion != null ? item.subregion : 'no information',
      area: item.area,
      population: item.population,
    }));

    allCountries.forEach(c => {
      Country.findOrCreate({
        where: {
          id: c.id,
          name: c.name,
          flag: c.flag,
          continent: c.continent,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        },
      });
    });
  } catch (err) {
    let message = err.response.statusText || 'Ocurrió un error';
    console.error(`Error ${err.response.status}: ${message}`);
  }
};

module.exports = { getApiCountries };
