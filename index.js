const mongoose = require('mongoose');
const app = require('./app');
const PORT = 4000;
const url = 'mongodb://localhost:27017/ADG-test'

app.listen(4000,()=>{
  console.log(`express server started at ${PORT}....`);
  mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true  })
    .then(()=> {
      console.log("mongodb server started....");
    }).catch((err)=> {
      console.log("error starting up mongo");
      process.exit();
    })
});