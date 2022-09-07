// Title: mcdanel-composer-routes.js
// Author: Kayla McDanel
// Date: 08/31/2022
// Description: Express routes for Composer API

const express = require('express')
const router = express.Router()
const Composer = require('../models/mcdanel-composer')

// findAllComposers
//@openapi
//   /composers:
//     get:
//       summary: Returns a list of all composers.
//       description: |
//         Returns a list of all composers in catalog.
//       responses:
//         '200':    # status code
//           description: A JSON array of composer names          
//         '500':    # status code
//           description: Server exceptions   
//         '501':    # status code
//           description: MongoDB exceptions

router.get('/api/composers', async(req, res) => {
    try {
        Composer.find({}, function(err, composers) {
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exeception: ${err}`
                })
            } else {
                console.log(composers);
                res.json(composers);
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})


//findComposerByID
//@openapi
// /composers/{id}:
// get:
//   summary: Returns a composer by ID
//   description: |
//     Returns a composers first and last name by ID
//   parameters:
//     - name: id
//       in: path
//       schema:
//         type: string
//       required: true
//   responses:
//     '200':    # status code
//       description: A JSON array of composer names
//     '500':    # status code
//       description: Server exceptions  
//     '501':    # status code
//       description: MongoDB exceptions

router.get('/api/composers/:id', async(req, res) => {
    try {
        Composer.findOne({'_id': req.params.id}, function(err, composers) {
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exeception: ${err}`
                })
            } else {
                console.log(composer);
                res.json(composer);
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})


//createComposer
//@openapi
//   /composers:
//      post:
//       summary: Creates a new composer.
//       description: |
//         Creates and adds a new composer to the catalog.
//       responses:
//         '200':    # status code
//           description: A JSON array for new composer.

//         '500':    # status code
//           description: Server exceptions
   
//         '501':    # status code
//           description: MongoDB exceptions

router.post('/api/composers', async(req, res) => {
    try {
        const newComposer = {
            firstName: req.body.type,
            lastName: req.body.type
        }

        await Composer.create(newComposer, function(err, composer) {
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exeception: ${err}`
                })
            } else {
                console.log(composer);
                res.json(composer);
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

module.exports = router;