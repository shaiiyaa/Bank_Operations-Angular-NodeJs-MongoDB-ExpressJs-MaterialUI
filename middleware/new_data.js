function newProductMid(request, response, next) {
    const data = request.body; 
    if('id' in data || 'ID' in data) {
        response.status(400).send('ID is not allowed in the request while adding new product.');
        return;
    };
    next();
};

module.exports = newProductMid;