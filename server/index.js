require('dotenv').config()
const express = require ('express');
const massive = require ('massive');
const controller = require ('./controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})


// const { PORT } = 5000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}.`);
})