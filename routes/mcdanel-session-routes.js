/** Title: mcdanel-session-routes.js
* Author: Kayla McDanel
* Date: 09/18/2022
* Description: Express routes for User API */

const express = require("express")
const router = express.Router()
const User = require('../models/mcdanel-user')
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require("uuid")

const saltRounds = 10;

/**signup
* @openapi
*  /api/signup:
*  post:
*   tags:
*      - Users
*   description: Creates and adds a new user to the catalog
*   summary: Creates a new user
*   responses:
*       '200':    # status code
*          description: Registered user
*       '401':    # status code
*          description: Username is already in use
*       '500':    # status code
*          description: Server exceptions
*       '501':    # status code
*          description: MongoDB exceptions*/


router.post('/api/signup', async(req, res) => {
    try {
        const newUser = {
            userName: req.body.type,
            Password: req.body.type,
            emailAddress: req.body.type
        }

    User.findOne({'userName': req.body.userName}, function(err, user) {
        if (!user) {
            const newRegisteredUser = newUser(req.params.userName);
            const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds); // salt/hash the password
             const newPassword = {
            passId: uuidv4(),
            pass: hashedPassword
            }
            
             User.create(newUser, function(err, userName) {
            if (err) {
               console.log(err);
               res.status(501).send({
                'message': `MongoDB Exception: ${err}`
        })
            } else {
                console.log(userName);
                res.json(userName);
            }
        })
        } else { 
            if (user) {
            console.log(user);
            res.status(401).send({
            'message': `Username is already in use`
})
 } catch (e) {
     console.log(e);
     res.status(500).send({
         'message': `Server Exception: ${e.message}`
     })
 }
 })

/**login
* @openapi
*  /api/login:
*  post:
*   tags:
*      - Login
*   description: Allows users to log in
*   summary: Log in API
*   responses:
*       '200':    # status code
*          description: User logged in
*       '401':    # status code
*          description: Invalid username and/or password
*       '500':    # status code
*          description: Server exceptions
*       '501':    # status code
*          description: MongoDB exceptions*/

router.post('/api/login', async(req, res) => {
    try {
        User.findOne({'userName': req.body.userName}, function(err, user) {
            if (user) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {
                console.log(password);
                if (!user) {
                    let passwordIsValid = bcrypt.compareSync(req.body.password, password.pass);

                    if (passwordIsValid) {
                        console.log('Password matches');
                        res.status(200).send({
                            'message': 'Password matches'
                        })
                    } else {
                        console.log('Password is incorrect');
                        res.status(401).send({
                            'message': `Invalid passId or password`
                        })
                    }
                } else {
                    console.log('Invalid passId');
                    res.status(401).send({
                        'message': `Invalid passId or password`
                    })
                }
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e}`
        })
    }
});

module.exports = router;