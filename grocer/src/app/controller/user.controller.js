const db = require("../models");
const User = db.users;

// Register a new user
exports.register = (request, response)=> {
    const user = new User({
        _id: request.body._id,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        dob: request.body.dob,
        phone: request.body.phone,
        address: request.body.address,
        password: request.body.password,
        funds: request.body.funds,
        attemptedLogins: request.body.attemptedLogins,
        isLocked: request.body.isLocked
    });

    user
    .save(user)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error occurred registering the user"
        });
    });
};

// Retrieve all users
exports.getAll = (request, response)=> {
    
};

