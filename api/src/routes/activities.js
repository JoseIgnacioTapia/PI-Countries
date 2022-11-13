const express = require('express');
const { Country, Activity } = require('../db.js');
const router = express.Router();
const { createActivity } = require('../controllers/controllers.js');

router.post('/', async (req, res) => {
  let { name, difficulty, duration, season, countries } = req.body;

  try {
    res
      .status(201)
      .json(
        await createActivity(name, difficulty, duration, season, countries)
      );
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = router;
