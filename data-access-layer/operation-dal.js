const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
require('./mongodb-access');

const OperationModel = require('../models/operation-model');

//Get all
async function getAllOperations() {
    // return await ProductModel.find().populate("category").exec();
    return await OperationModel.find().exec();    
};

//Get one
async function getOperationByAccount(id) {
    // const operation = await OperationModel.findById(id).populate("category").exec();
    const operation = await OperationModel.find({accountNumber: id}).populate("operation").exec();
    return operation;
};

//Post
async function addOperation(operation) {
    await operation.save();
    // operation = await ProductModel.findById(product._id).populate("category").exec();

    return operation;
};


module.exports = {
    getAllOperations,
    getOperationByAccount,
    addOperation
}