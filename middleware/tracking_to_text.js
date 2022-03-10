const fs = require('fs');

function tracking(request, response, next) {
    try {
        const date = new Date;
        fs.appendFileSync('./tracking.txt', 
            `${date.toLocaleDateString()} ${date.toLocaleTimeString()} , Method: ${request.method}, Route: ${request.originalUrl}\n`
        );

    } catch (error) {
        console.log(error);
    }


        next();
};

module.exports = tracking;