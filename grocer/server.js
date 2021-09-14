// Imports
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Url for database handling
let url = "mongodb://localhost:27017/tcs_capstone";
let app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

// Connects the database
let db = mongoose.connect(url, (err,res)=> {
    if (err) { console.log(err); }
    else { console.log("Connected to " + db, " + ", res); }
});

let Schema = mongoose.Schema;
let userSchema = new Schema({
    // Enter the user schema here
});
let userModel = mongoose.model("User_Account", userSchema);

// Connects the database. Must be called before operations
// function turnOnDb() {
//     mongoose.pluralize(null);
//     mongoose.connect(url).then(res=>{console.log("Connected Database")}).catch(err=>console.log(err));
// }

// New user registry
app.post("/database/storeUser", (request,response)=> {
    //let uid = request.query.

    turnOnDb();
    let db = mongoose.connection;

    db.once("open", ()=> {
        //let newUser = new userModel({_id:})
    });
});

app.get("/database/getUsers", (request,response)=> {
    turnOnDb();
    let db = mongoose.connection;


});

app.listen(9090, ()=>console.log("Server running on port 9090"));
