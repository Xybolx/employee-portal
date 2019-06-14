const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: { 
    type: String, 
    required: true 
  },
  position: {
      type: String,
      required: true
  },
  permissions: {
      type: String,
      required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validPassword = function (password, cb) {
  console.log("Inside Model, password: ", password)
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", userSchema);


module.exports = User;