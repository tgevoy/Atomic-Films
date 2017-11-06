"use strict";

const contact = function(req, res) {
    res.render("contact", { title: "Contact Atomic Films"});
};

module.exports = {
    contact
};

/* Deleted for Lab 6 Task 4 Part 3
var index = function(req, res) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    index
};
*/