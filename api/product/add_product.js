const express = require('express');
const router = express.Router();
const Product = require('../../model/product');

router.post('/', async (req, res) => {
    let data = Product(req.body);

    try {
        let dataToStore = await data.save();
        res.status(200).json(dataToStore);
    } catch (error) {
        res.status(400).json({
            'status': error.message
        });
    }
});

module.exports = router;
