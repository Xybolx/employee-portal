const router = require("express").Router();
const userRoutes = require("./users");
const db = require("../../models");
const passport = require("../../config/passport-setup");

// User routes
router.use("/users", userRoutes);

// Route to log a user in
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("Back in the redirect!");
  console.log("Req.user is ", req.user);
  console.log(req.session);
res.status(200).send("user authenticated!");   
});

// route to sign up a user
router.post("/signup", function (req, res) {
  console.log('req.body= ' + req.body);
  db.User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    position: req.body.position,
    permissions: req.body.permissions
  }).then(function () {
    res.redirect(307, "/api/login");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
});

// Route for logging user out
router.get("/logout", function (req, res) {
      req.logout();
      res.redirect("/");
  console.log("user logged out");
});

module.exports = router;