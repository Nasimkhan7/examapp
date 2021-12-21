const mongoose =require('../connection');
const schema =new mongoose.Schema({

    title: String,
    course: String,
    max_marks: Number,
    author: {type:mongoose.Types.ObjectId,ref: 'users'},
    questions: [],
    created: {type:Date,default:new Date()},


});

const model= mongoose.model("papers",schema);

module.exports= model;

