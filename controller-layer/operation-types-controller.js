
const express = require("express");
const operation_dal = require("../data-access-layer/operation-dal");
const OperationModel = require('../models/operation-model');
const operationTypes_dal = require("../data-access-layer/operation-types-dal")

const router = express.Router();


//Get operation types
router.get('', async (request, response) => {
    try {
        const types = await operationTypes_dal.getAllTypes();

        response.json(types);
    } catch (error) {
        response.status(500).send(error.message);
    }
});


module.exports = router;