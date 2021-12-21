const mongoose =require("mongoose");


const uri="mongodb+srv://nasimkhan:nasimkhan@cluster0.tpjhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//promise
mongoose.connect(uri)
.then(() =>{console.log('database connected')})
.catch ((err) => {console.error(err)});

module.exports= mongoose;
