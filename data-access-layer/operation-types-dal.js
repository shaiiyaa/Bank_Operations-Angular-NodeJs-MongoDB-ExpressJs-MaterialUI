const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
require('./mongodb-access');

const OperationTypeModel = require('../models/operation-type-model');


//Get all types
async function getAllTypes() {
    // return await ProductModel.find().populate("category").exec();
    return await OperationTypeModel.find().exec();    
};

module.exports = {
    getAllTypes
}