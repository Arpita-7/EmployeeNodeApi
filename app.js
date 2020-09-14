const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const employeeRoutes = require ("./routes/employee");

const myMiddleware = (req,res,next) => {console.log("My middleware executed.");
next();
};

dotenv.config()


mongoose.connect(process.env.MONGODB_CONNECTION,{ useNewUrlParser: true })
.then(()=> {
    console.log("mongoDB connected");
})

mongoose.connection.on('error', (error) => {
    console.log("error occured in mongoDB connection" + error.message);
})


app.use(morgan("dev"));
app.use(cors());
app.use(myMiddleware);
app.use(bodyParser.json());
app.use("/", employeeRoutes);


const PORT = "3050"
app.listen(PORT, () => { 
    console.log("Server listening at port 3050.")
});