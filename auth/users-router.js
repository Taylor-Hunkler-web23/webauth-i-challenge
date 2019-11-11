const router = require('express').Router();

const Users = require('./users-model.js');





const bcrypt = require ('bcryptjs');

router.post('/register', (req, res) => {
  let userInformation = req.body;

  const hashPassword = bcrypt.hashSync(userInformation.password, 12);
  userInformation.password=hashPassword;

  Users.add(userInformation)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

  module.exports = router;



