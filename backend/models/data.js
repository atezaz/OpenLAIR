import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let indicator = new Schema({
    indicatorName: String,
    metrics:[String] 
    
});

let activities = new Schema({
    Name: String,
    indicator:[indicator]
});
let data_Schema=new Schema({
    LearningEvents:String,
    LearningActivities:[activities]
    
});

module.exports = mongoose.model('data', data_Schema);