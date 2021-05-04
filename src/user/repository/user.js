'use strict';

const MongoClient = require('mongodb').MongoClient;

exports.findOneByEmail = (email, callback) => {
    MongoClient.connect(process.env.DB_URL,{ useUnifiedTopology: true}, (err,client) => {

        if (err) return err;

        const collection = client.db(process.env.DB_NAME).collection('users');

        collection.find({email_address : email}).toArray((err,data)=> {
            client.close();
            callback(data)
        });

    });
}

exports.createNewUser = (user, callback) => {
    MongoClient.connect(process.env.DB_URL,{ useUnifiedTopology: true}, (err,client) => {

        if (err) return err;

        const collection = client.db(process.env.DB_NAME).collection('users');

        collection.insertOne(user, (err,data) => {
            if (err) settings.error();
            client.close();
            callback()
        });

    });
}

