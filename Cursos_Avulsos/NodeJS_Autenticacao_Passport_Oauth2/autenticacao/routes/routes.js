const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const controller = require("../controllers/index");
const session = require("express-session");
const sessionStorage = require("../util/sessionStorage");
const passport = require('passport')

router.use(
  session({
    secret: "alura",
    resave: false,
    saveUninitialized: false,
    store: sessionStorage,
  })
);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(passport.initialize())
router.use(passport.session())
require('../passport-config')

router.get("/", controller.showIndex);
router.post("/", controller.login);
router.get("/signup", controller.showPageSignUp);
router.post("/signup", controller.signup);
router.get("/members", controller.checkAuth, controller.showMembersPage);
router.get("/logout", controller.logout);

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/members');
  });

router.use(controller.get404Page);

module.exports = router;
