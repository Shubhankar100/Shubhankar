module.exports = app => {
    const users = require("../controller/user.controller");

    var router = require("express").Router();

    // Create a new user
    router.post("/", users.register);

    // Get user by id
    router.get("/:id", users.findOne);

    // Update a user by id
    router.put("/:id", users.updateOne);

    app.use("/api/users", router);
}