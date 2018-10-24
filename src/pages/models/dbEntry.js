import React from 'react';
const mongoose = require('mongoose');
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/dbEvents');

const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;









const dbEntry;

    const newEvent = new Schema ({
    eventID: ObjectID,
    eventName: String,
    eventDate: Date,
    eventClient: String,

    guestCount: Number,
    venue: String,
    schedule: String,
    catering: String,
    entertainment: String,
    comments: String
  

    });



    export default dbEntry;
