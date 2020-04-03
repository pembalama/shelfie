

    getInventory = (req, res) => {

        const db = req.app.get('db');
        db.get_products()
        .then(product => {
            res.status(200).json(product)})
        .catch(error => {
            res.status(500).json("today is not your day")
        })
    }



    addProduct = (req, res) => {

        const db = req.app.get('db');
        const{ image, product, price } = req.body;
        db.create_product(image, product, price)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(error => {
            res.status(500).json("sorry, try again!!")
        });
    }




module.exports = {
    getInventory,
    addProduct
}