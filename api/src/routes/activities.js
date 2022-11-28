const express = require('express');
const { Country, Activity } = require('../db.js');
const router = express.Router();
const {
  createActivity,
  getAllActivities,
} = require('../controllers/controllers.js');

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

router.get('/', async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    return res.status(200).json(allActivities);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
