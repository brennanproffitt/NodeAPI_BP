const axios = require('axios');

exports.weather_get = function (req, res) {
    axios.get('').then(function (response) {
        res.render('weather', response.data);
    })

}