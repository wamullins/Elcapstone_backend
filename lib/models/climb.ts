import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClimbSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name of the climb'
    },
    typeOfRoute: {
        type: String,
        required: 'base route or full ascent'
    },
    grade: {
        type: String,    
        required: 'grade of route using yosemite decimal system'        
    },
    routeDescription: {
        type: String            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});