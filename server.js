// require("dotenv").config();
// const express = require("express")
// const mongoose = require("mongoose")
// const app = express();

// mongoose.connect(process.env.DB_URL);


// con.on("error", (error) => console.error(error));

// con.once("open", () => console.log("Connected to DB"));

// app.use(express.json())   
// const userRouter= require('./routes/users')
// app.use('/users', userRouter)



// app.listen(9000, () => console.log("server started..."));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors"); // Add this line      

const app = express();

app.use(express.json());   // Enable JSON parsing in Express         
// in the post router print json format in express frmaework


// app.use(cors({ origin: "*" }));

const userRouter = require('./routes/users');
app.use('/users', userRouter);



// async function connectMongo() {               //this one is better
//     await mongoose.connect(process.env.DB_URL)
//         .then(() => {
//             console.log("Connected to DB");
//         })
//         .catch((err) => {
//             console.log(`Error: ${err.message}`);
//         });
// }

// connectMongo();

mongoose.connect(process.env.DB_URL);
const connect = mongoose.connection;
connect.once("open", function () {
  console.log("Connected to DB");
});



app.listen(9000, () => {
    console.log("Server is up on port 9000");
});

