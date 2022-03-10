const express = require("express");
const operation_dal = require("../data-access-layer/operation-dal");
const OperationModel = require('../models/operation-model');

const router = express.Router();

// Get all
router.get('', async (request, response) => {
    try {
        const operations = await operation_dal.getAllOperations();

        response.json(operations);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// Get one
router.get('/:id', async (request, response) => {
    try {
        const _id = request.params.id;
        
        const operation = await operation_dal.getOperationByAccount(_id);
        response.json(operation);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

//Post
router.post('', async (request, response) => {
    try {
        const newOperation = new OperationModel(request.body);
        
        //Run validations
        const errorMessages = newOperation.validateSync();// Expected validation errors
        //Sends status 400 if validations fail
        if(errorMessages) {
            response.status(400).send(errorMessages);
            return;
        };
            
        //continue if validation succeeds
        const result = await operation_dal.addOperation(newOperation);
      
        response.status(201).json(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
});



module.exports = router;