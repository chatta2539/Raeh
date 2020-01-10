var express = require('express');
var router = express.Router();
var http = require("https");
const request = require('request');
const app = express() // สร้างตัวแปร app เป็น instance ของ express app
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.get('/index2', function(req, res, next) {
    httpgetWeather().then(function(result) {
        res.render('index', { title: 'Express', timeZone: result });
        // res.write(JSON.stringify([1, 2, 3, result]));
        // res.end();

    });
});
router.get('/login', function(req, res, next) {
    res.render('login');
});

function httpgetWeather() {
    return new Promise(function(resolve, reject) {
        request('https://api.darksky.net/forecast/049312bbd468e56d6dc7c85dfa647397/13.5528828,100.7910837', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.timezone);
            resolve(body.timezone);
        });

    });
}


module.exports = router;