const express = require('express');
const router = express.Router();
const Product = require('../../model/product');

router.patch('/:id', async (req, res) => {
    let id = req.params.id;
    let updatedData = req.body;
    let options = { new: true };

    try {
        const data = await Product.findByIdAndUpdate(id, updatedData, options);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;
