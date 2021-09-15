const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log("Database connected.");
    })
    .catch(()=> {
        console.log("Cannot connect to the database.", err);
        process.exit();
    });

app.get("/", (request,response)=> {
    response.json({message:"Simple web app"});
});

require("./router/user.router")(app);

app.listen(9090, ()=> {
    console.log("Server is running on port 9090");
});
