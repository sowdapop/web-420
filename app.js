const express = require('express')
const http = require('http')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({'extended' : true}));

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], // files containing annotations for the OpenAPI Specification
};

const openapiSpecification = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


app.listen(PORT, () => {
    console.log("Application started and listening on port" + PORT);
});