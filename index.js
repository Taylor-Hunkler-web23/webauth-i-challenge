const express = require('express');
const cors = require('cors');
 authRouter = require ('./auth/users-router.js')

const server = express();
server.use(cors());
server.use(express.json ());

server.use('/auth',authRouter);



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
