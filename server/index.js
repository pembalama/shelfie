require('dotenv').config()
const express = require ('express');
const massive = require ('massive');
const {getProducts} = require ('./controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(err => console.log(err));

// const { PORT } = 5000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}.`);
})


app.get('/api/inventory', getInventory);
app.post('/api/product', addProduct)
// app.put('/api/product/:id', updateProduct);
// app.delete('/api/product/:id', removeProduct);

