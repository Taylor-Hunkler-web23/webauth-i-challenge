// const bcrypt = require ('bcryptjs');
// const Users = require('./users-model.js');



module.exports = (req, res, next) => {
  
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass!!' });
  }
}

//   module.exports = (req, res, next) => {
//       let {username, password} = req.headers;
  

//   if(username && password){
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password )) {
        
  
//   next();
          
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
//       })
//       .catch(error => {
//           console.log ('login error' ,error);
//         res.status(500).json({message: 'error'});
//       });
//     } else {
//         res.status(400).json({message:'please provide credentials'})
//     }
//   };
  

  