"use strict";

const about = function(req, res) {
    res.render("about", { title: "About Atomic Films"});
};

module.exports = {
    about
};

/* Deleted for Lab 6 Task 4 Part 3
var index = function(req, res) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    index
};
*/