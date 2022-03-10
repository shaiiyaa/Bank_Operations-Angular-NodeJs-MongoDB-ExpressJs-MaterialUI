const mongoose = require('mongoose');
const OperationTypeModel = require("../models/operation-type-model");

const OperationScheme = mongoose.Schema({
    accountNumber: {
        type: Number,
        required: [true, 'Account number is required.'],
        minlength: [6, 'Account number most be 6 numbers.'],
        maxlength: [6, "Account number cannot exceed 6."]
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required.'],
        min: [1, 'Amount most be 1$ minimum.'],
        max: [100000, "Amount cannot exceed 100000."]
    },
    date: {
        type: String,
        required: [true, 'date is required.'],
    },
    interest: Number,
    payments: Number,
    typeID: { // Foreign Key to categories collection.
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Operation type is required.'],
    }
}, { versionKey: false, toJSON: {virtuals: true}});

// Virtual Field
OperationScheme.virtual("operation", {
    localField: "typeID", // Which local filed connects to that relation.
    ref: "OperationTypeModel", // Which model to create relation to?
    foreignField: "_id", // Which foreign filed connects to tha relation.
    justOne: true // category field should be one object and not array.
});

// 3.Create Mongoose Model with scheme defined above
const OperationModel = mongoose.model("OperationModel", OperationScheme, "AccountOperations");

// 4.Return Mongoose Model (module.exports)
module.exports = OperationModel;
