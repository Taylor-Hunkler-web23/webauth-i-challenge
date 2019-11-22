const express = require('express');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStorage = require("connect-session-knex")(session);//for storing sessions in database

authRouter = require('./auth/users-router.js')

const server = express();
server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
server.use(express.json());
const knexConnection = require('./database/dbConfig.js')

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
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10, //delete expires session every 10 minutes
        tablename: 'user_sessions',
        sidfieldname: 'id',
        createtable: true,

    })
}


server.use(session(sessionConfiguration))

server.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
