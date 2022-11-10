const express = require('express');
const { Country, Activity } = require('../db.js');
const router = express.Router();
const {
  getAllCountries,
  getCountryByName,
  getCountryById,
} = require('../controllers/controllers.js');

router.get('/', async (req, res) => {
  const { name } = req.query;
  const countriesByName = name != null ? await getCountryByName(name) : null;
  const allCountries = await getAllCountries();

  if (name) {
    try {
      console.log('name');
      return res.status(200).json(countriesByName);
    } catch (error) {
      res.status(404).send(error.message);
    }
  } else {
    try {
      console.log('allCountry');
      return res.status(200).json(allCountries);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountryById(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
