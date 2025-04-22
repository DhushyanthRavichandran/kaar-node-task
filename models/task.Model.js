const mongoose=require('mongoose');

const TaskSchema= new mongoose.Schema({
    Taskname:{
        type:String,
        required:true
    },

    TaskAssignedTo:{
        type:String,
        required:true
    },

    TaskDeadline:{
        type:Number,
        required:true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let schema=mongoose.model('Task',TaskSchema);
module.exports=schema;