'use strict';
const { Op } = require('sequelize');
const { Country, Activity } = require('../db.js');

let countries = [];
let activities = [];

module.exports = {
  reset: function () {
    countries = [];
    activities = [];
  },

  getAllCountries: async function () {
    const countries = await Country.findAll();
    if (!countries) throw new Error('Hubo un error en la petición');

    return countries;
  },

  getCountryByName: async function (name) {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    if (!countries)
      throw new Error('Ningun país coincide con el nombre recibido');

    return countries;
  },

  getCountryById: async function (id) {
    const idCountry = id.toUpperCase();
    const country = await Country.findByPk(idCountry, {
      include: Activity,
    });

    if (!country) throw new Error(`No existe el país con el ${idCountry}`);

    return country;
  },

  createActivity: async function (
    name,
    difficulty,
    duration,
    season,
    countries
  ) {
    // Validación
    if (!name || !difficulty || !duration || !season || !countries)
      throw new Error('No fueron enviados todos los datos!');

    const nameLow = name.toLowerCase();

    const activityFound = await Activity.findOne({
      where: {
        name: nameLow,
      },
    });

    let activityCreated;

    if (activityFound === null) {
      activityCreated = await Activity.create({
        name: nameLow,
        difficulty,
        duration,
        season,
      });
    } else {
      return 'La actividad ya existe';
    }

    for (let i = 0; i < countries.length; i++) {
      let country = await Country.findByPk(countries[i], {
        include: Activity,
      });

      await country.addActivity(activityCreated);
    }

    return 'Se ha creado la actividad';
  },
};
