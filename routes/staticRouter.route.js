const express = require('express');
const URL = require('../models/url.model');
const { restrictTo } = require('../middlewares/auth');
const router = express.Router();

router.get('/admin/urls', restrictTo(["ADMIN"]), async (req, res, next) => {
    const allurls = await URL.find();
    return res.render('home', {
        urls: allurls,
        page: "admin"
    });
})
router.get('/signup', (req, res) => {
    return res.render('signup', { page: "signup" });
});

router.get('/login', (req, res) => {
    return res.render('login', { page: "login" });
});
router.get('/logout', (req, res) => {    
    res.clearCookie("token");   // yaha "token" tumhari cookie ka naam hai
    return res.redirect('/login');  // render nahi, redirect use karo
});

router.get('/', restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const allurls = await URL.find({ createdBy: req.user._id });
    return res.render('home', {
        urls: allurls,
        btnValue: "logout",
        page: "home"
    });
});

module.exports = router; 