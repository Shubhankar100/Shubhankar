let app = require("express")();
let http = require("http").Server(app);
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));    // enable body data
app.use(bodyParser.json());     // enable json data.

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/addCourse.html", (req, res) => {
    res.sendFile(__dirname + "/addCourse.html");
})

app.get("/deleteCourse.html", (req, res) => {
    res.sendFile(__dirname + "/deleteCourse.html");
})

app.get("/fetchCourses.html", (req, res) => {
    let courseList = [];
    const databasename = "coursesDB";  // Database name
    mongoClient.connect(url ,{ useUnifiedTopology: true }).then((client) => {
    const connect = client.db(databasename);
        const collection = connect.collection("allCourses");
        collection.find({}).toArray().then((ans) => {
            res.send(ans);
        });
    }).catch((err) => {
        console.log(err.Message);
    })
})


app.get("/updateCourse.html", (req, res) => {
    res.sendFile(__dirname + "/updateCourse.html");
})

app.post("/addCourses", (req, res) => {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("coursesDB");
            db.collection("allCourses").insertOne({ courseId: req.body.courseId, courseName: req.body.courseName, description: req.body.description, amount: req.body.amount }, (err2, result) => {
                if (!err2) {
                    console.log(result.insertedCount);
                    res.send("Course added successfully...");
                } else {
                    console.log(err2.message);
                    res.send("Course not added...");
                }
                client.close();
            });

        }
    });
})

app.post("/updateAmount", (req, res) => {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("coursesDB");
            db.collection("allCourses").updateOne({ courseId: req.body.courseId }, { $set: { amount: req.body.amount } }, (err2, result) => {
                if (!err2) {
                    // console.log(result);
                    if (result.modifiedCount > 0) {
                        console.log("Record updated successfully")
                        res.send("Course amount updated successfully...");
                    } else {
                        console.log("Record didn't update");
                        res.send("Record didn't update...");
                    }
                }
                client.close();
            })
        }
    })
})

app.post("/deleteCourseId", (req, res) => {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("coursesDB");
            db.collection("allCourses").deleteOne({ courseId: req.body.courseId }, (err2, result) => {
                if (!err2) {
                    if (result.deletedCount > 0) {
                        res.send("Course deleted successfully...");
                    } else {
                        res.send("Course not present...");
                    }

                }
                client.close();
            })
        }
    })
    
})

http.listen(4200, () => console.log('server running on port number 4200'));