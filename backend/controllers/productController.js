const express = require('express');
const Product = require('../models/productModel');
const ApiFeature = require('./../utility/ApiFeature')

exports.registerProduct = async (req, res) => {
    const { name, price, description,image } = req.body;
    try {
        const product = await Product.create({ name, price, description,image });
        res.status(200).json({
            success: "true",
            product
        })
    } catch (err) {
        console.log(err);
    }
}


exports.getProduct = async (req, res) => {
    try {
        const filter = {}
        const feature = new ApiFeature(Product.find({}), req.query)
        .sort()
        .filter()
        .pagination()
        const products = await feature.query;
        res.status(200).json({
            status: 'success',
            length: products.length,
            data: {
                products
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        })
    } catch (err) {
        console.log(err);
    }
}