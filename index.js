const express = require('express');

 authRouter = require ('./auth/users-router.js')
const server = express();
server.use(express.json ());

server.use('/auth',authRouter);



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
