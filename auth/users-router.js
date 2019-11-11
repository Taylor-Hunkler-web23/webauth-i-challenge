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


router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password )) {
        //check that password is valid
        //compare it to hash in database


        res.status(200).json({ message: `Logged in!` });
      } else {
        res.status(401).json({ message: 'You shall not pass' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

  module.exports = router;



