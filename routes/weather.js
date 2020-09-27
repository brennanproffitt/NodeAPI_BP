const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/* GET weather JSON listing. */
router.get('/v1/weather', function (req, res, next) {

    let weatherData = {
        temp: '90.5',
        unit: 'fahrenheit',
        cloudy: 'false',
        precipitationChance: '0'
    }

    res.send(weatherData);
});

module.exports = router;