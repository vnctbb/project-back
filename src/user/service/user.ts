'use strict'

const user_service = require('../repository/user.js');
const user_validator = require('../validators/user.js');
const user_model = require('../model/userModel.ts')

exports.findOneByEmail = (req, res) => {
    user_service.findOneByEmail(req.params.email, (user) => {
        if (user.length == 0) res.send('error : user not found');

        const response = {
            result : user,
            id : req.params.email
        };

        res.json(response);
    });

};

exports.create = (req, res) => {
    let userValidate: string;

    if(req.body) {
        userValidate = user_validator.newUserValidator(req.body);
    } else {
        res.send('malformed parameters');
    }

    console.log(userValidate)

    if(userValidate) {
        user_service.createNewUser(userValidate, () => {
            res.send("user created");
        });
    } else {
        res.send('invalid user');
    }

};