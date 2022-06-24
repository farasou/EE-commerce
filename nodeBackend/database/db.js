const mongoose = require('mongoose')
const URI = process.env.DB_URI

mongoose.connect(URI)
.then(()=> console.log("Connected to databse (mongoDB)"))
.catch(err => console.log("Couldn\'t connect to database", err.message))