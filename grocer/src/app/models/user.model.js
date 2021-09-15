module.exports = mongoose => {
  const User = mongoose.model(
    "user_accounts", mongoose.Schema(
      {
        _id:Number, // Auto-generated user ID, this will be the username
        firstname:String,
        lastname:String,
        email:String,
        dob:String,
        phone:String,
        address:String,
        password:String,
        funds:Number,
        attemptedLogins:Number,
        isLocked:Boolean
      }
    )
  );

  return User;
}
