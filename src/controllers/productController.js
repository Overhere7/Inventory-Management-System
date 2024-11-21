const mongoose = require("mongoose");
const  Product = require('../models/productModel.js');

const addProduct = async(req,res) =>{
    try{
        const createdProduct = await Product.create(req.body);
        res.status(201).send(createdProduct)
    }catch(error){
        console.log(error);
    }
}
const getAllProduct = async(req,res) =>{
    try{
        const getProduct = await Product.find();
        res.status(200).send(getProduct);
    }catch(error){
        console.log(error);
    }
}

const getProduct = async(req,res) =>{
    try{
        const id = req.params.id
        const getProduct = await Product.findById(id);
        console.log(getProduct.name)
        res.status(200).send(getProduct);
    }catch(error){
        console.log(error);
    }
}

const updateProduct = async(req,res) =>{
    try{
        const id = req.params.id
        const getProduct = await Product.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).send(getProduct);
    }catch(error){
        console.log(error);
    }
}

const deleteProduct = async(req,res) =>{
    try{
        const id = req.params.id
        const getProduct = await Product.findByIdAndDelete(id);
        res.status(200).send({message:"delete"});
    }catch(error){
        console.log(error);
    }
}

module.exports={addProduct,getAllProduct,getProduct,updateProduct,deleteProduct};