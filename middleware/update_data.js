function updateData(request, response, next) {
    const changes = request.body;
    for(let prop in changes) {
        console.log(`User is going to update - ${prop + ': ' + changes[prop]}`)
    }
    next();
}

module.exports = updateData;