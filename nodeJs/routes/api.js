const express = require("express");
const router = express.Router();
const Products = require('../models/products');

/*
PRODUCTS API
*/
//GET REQUEST TO THE DATABASE
router.get("/products", function(req, res) {
    Products.find({}).then(function(product){
        res.send(product);

    });
});

//GET REQUEST TO THE DATABASE
router.get("/products/:id", function(req, res) {
    Products.findOne({_id: req.params.id}).then(function(product){
        res.send(product);
    });   
});

//POST REQUEST TO THE DATABASE
router.post("/products", function(req, res) {
    Products.create(req.body).then(function(product){
        res.send(product);
        res.json(product);
    });
});

//PUT REQUEST TO THE DATABASE
router.put("/products/:id", function(req, res) {
    Products.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Products.findOne({_id: req.params.id}).then(function(product){
            res.send(product);
        });
    })
});

//DELETE REQUEST TO THE DATABASE
router.delete("/products/:id", function(req, res) {
    Products.findByIdAndRemove({_id: req.params.id}).then(function(product){
        res.send(product);
    });
});


  
module.exports = router;