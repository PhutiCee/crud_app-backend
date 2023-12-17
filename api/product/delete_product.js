const express = require('express');
const router = express.Router();
const Product = require('../../model/product');

router.delete('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        const data = await Product.findByIdAndDelete(id);
        res.json({
            'status': `Deleted the product '${data.name}' from the database`
        });
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;
