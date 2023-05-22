const mongoose=require('mongoose') 
// mongoose.connect("mongodb://127.0.0.1:27017/e-commerce",{useNewUrlParser:true,useUnifiedTopology:true},

 // mongoose.connect("mongodb+srv://visshailendra:root@cluster0.3wxjvr8.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},


    // );

mongoose.connect("mongodb+srv://visshailendra:root@cluster0.3wxjvr8.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},).then(()=>{

console.log("Connected to DB");

}).catch((err)=>{

console.log(err);

})
