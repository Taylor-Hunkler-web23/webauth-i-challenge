const express = require('express');
const cors = require('cors');
const session = require('express-session');

authRouter = require('./auth/users-router.js')

const server = express();
server.use(cors());
server.use(session());
server.use(express.json());

server.use('/auth', authRouter);

const sessionConfiguration = {
    name: 'name',
    secret: process.env.COOKIE_SECRET || 'key',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: process.env.NODE_ENV === "production" ? true : false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
