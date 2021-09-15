module.exports = app => {
    const users = require("../controller/user.controller");

    var router = require("express").Router();

    // Create a new user
    router.post("/", users.register);

    app.use("/api/users", router);
}