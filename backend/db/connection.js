const mongoose=require('mongoose')


mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MONGOOSE CONNECTED");
})
.catch((err)=>{
    console.log("Not Connencted to MONGOOSE\n"+err);
})

// NOTE=> mongoose.connect do not eccept callbacks anymore....
// it returns a promise