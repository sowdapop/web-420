//Title: app.js
//Author: Kayla McDanel
//Date: 08 17 2022
//Description: OpenAPI assignment


const express = require('express')
const http = require('http')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const mongoose = require('mongoose')
const ComposerAPI = require('./routes/mcdanel-composer-routes')

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
app.use('/api', ComposerAPI);


app.listen(PORT, () => {
    console.log("Application started and listening on port" + PORT);
});

