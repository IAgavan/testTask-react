/* eslint-disable linebreak-style */
const router = require('express').Router();
const controller = require('./controller');

router.get('/birth-day.json', (req, res) => {
  setTimeout(() => {
    res.send(controller.getBirthday());
  }, 2000);
});

router.get('/marital-status.json', (req, res) => {
  setTimeout(() => {
    res.send(controller.getMartialStatus());
  }, 3000);
});

router.get('/education.json', (req, res) => {
  setTimeout(() => {
    res.send(controller.getEducation());
  }, 4000);
});

module.exports = router;
