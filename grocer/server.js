// Imports
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let url = "mongodb://localhost:27017/tcs_capstone";
let app = express();

mongoose.pluralize(null);
mongoose.connect(url).then(res=>{}).catch(err=>console.log(err));
