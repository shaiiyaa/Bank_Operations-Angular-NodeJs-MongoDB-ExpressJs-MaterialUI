const mongoose = require("mongoose");

const OperationTypeSchema = mongoose.Schema({
    name: String

}, { versionKey: false, toJSON: { virtuals: true }, id: false });

// CategorySchema.virtual("products", {
//     localField: "_id", // relation's local field
//     ref: "ProductModel", // Model?
//     foreignField: "categoryId" // relation's foreign field
// });

const OperationTypeModel = mongoose.model("OperationTypeModel", OperationTypeSchema, "OperationTypes");

module.exports = OperationTypeModel;
