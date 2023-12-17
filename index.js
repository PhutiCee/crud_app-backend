const express = require('express');
const http = require('http').Server(express);
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT || 3001;


const app = express();
const Product = require('./model/product');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");



        // //POST api
        // app.post("/api/product/add_product", async (req, res) => {

        //     let data = Product(req.body);

        //     try {
        //         let dataToStore = await data.save();
        //         res.status(200).json(dataToStore);
        //     } catch (error) {
        //         res.status(400).json({
        //         'status': error.message});
        //     }

        //     });

        // //GET api
        // app.get("/api/product/get_product/", async (req, res) => {

        //     try {
        //         let data = await Product.find();
        //         res.status(200).send(data);
        //     } catch (error) {
        //         res.status(500).json(error.message);
        //     }
        // });

        // //UPDATE api
        // app.patch("/api/product/update_product/:id", async (req, res) => {

        //     let id = req.params.id;
        //     let updatedData = req.body;
        //     let options = {new: true};

        //     try {
        //         const data = await Product.findByIdAndUpdate(id, updatedData, options);

        //         res.send(data);
        //     } catch (error) {
        //         res.send(error.message);
        //     }
        // });

        // //DELETE API
        // app.delete("/api/product/delete_product/:id", async (req, res) => {

        //     let id = req.params.id;

        //     try {
        //         const data = await Product.findByIdAndDelete(id);

        //         res.json({
        //             'status': `Deleted the product '${data.name}' from database`
        //         });
        //     } catch (error) {
        //         res.json(error.message);
        //     }
        // });
    })
    .catch((err) => {
        console.log(err.message);
    });

// Routes
app.use('/api/product/get_product', require('./api/product/get_product'));
app.use('/api/product/add_product', require('./api/product/add_product'));
app.use('/api/product/update_product', require('./api/product/update_product'));
app.use('/api/product/delete_product', require('./api/product/delete_product'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});