global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
console.log(process.env.NODE_ENV);

const express = require('express');
const cors = require('cors');




const operation_controller = require("./controller-layer/operation-controller");
const operation_types_controller = require("./controller-layer/operation-types-controller");

const fileUpload = require("express-fileupload");


//1.Create rest api server
const server = express();
server.use(fileUpload());

// Middleware
server.use(cors());

//2. Configure REQUEST parser to use JSON (parser that automaticly parses Json into JS object)
// server.use(express.urlencoded({extended: true}));// HTML Form submit
server.use(express.json());


///////////
                const path = require('path');

                server.use(express.static('public'));
                server.get('localhost:5000',(req,res)=>{
                    res.sendFile(path.join(__dirname,'public/index.html'));
                });
                server.get('https://exam-4-jb.herokuapp.com/',(req,res)=>{
                    res.sendFile(path.join(__dirname,'public/index.html'));
                });
                server.get('/main',(req,res)=>{
                    res.sendFile(path.join(__dirname,'public/index.html'));
                });
                server.get('/add',(req,res)=>{
                    res.sendFile(path.join(__dirname,'public/index.html'));
                });

// server.use(express.static('./FrontEnd/dist/angular-accounts'));
// server.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: './FrontEnd/dist/angular-accounts'}
//     );
// });
//////////////////

server.use((err, request, response, next) => {
    response.status(err.status).send(err.message);
});

server.use("/api/operations", operation_controller);
server.use("/api/types", operation_types_controller);

server.use("*", (request, response) => {
    response.status(404).send("Route not found");
});





//4. Open server for client request using a specific port
const port = process.env.PORT || 3030
server.listen(port, () => console.log(`Server is listening on port:${port}...`));


