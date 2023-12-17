const express = require('express');
const router = express.Router();
const Product = require('../../model/product');

router.get('/', async (req, res) => {
    try {
        let data = await Product.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;
