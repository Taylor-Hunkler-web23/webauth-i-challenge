const router = require('express').Router();

const Users = require('./users-model.js');

const requiresAuth =require('./middleware.js')




const bcrypt = require ('bcryptjs');

router.post('/register',  (req, res) => {
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




// router.post('/hash', (req, res) => {

//   // read a password from the body
//   let password = req.body.password;

//   // hash the password using bcryptjs
//   const hash = bcrypt.hashSync(password, 8)

//   // return it to the user in an object that looks like
//   // { password: 'original passsword', hash: 'hashed password' }


  
//     res.status(200).json({password, hash})

  
// })


router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password )) {
     

        res.status(200).json({ message: `Logged in!` });
      } else {
        res.status(401).json({ message: 'You shall not pass' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/users', requiresAuth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


  module.exports = router;



