var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
  request({
    url: 'https://capsule-exams.herokuapp.com/api/capsule/projects',
    json: true
  }, (err, response, body) => {
    if (err) next(err);
    res.json(body.projects);
  })
});

module.exports = router;
