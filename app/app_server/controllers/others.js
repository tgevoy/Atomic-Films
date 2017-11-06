"use strict";

const contact = function(req, res) {
    res.render("contact", { title: "Contact Atomic Films"});
};

const cart = function(req, res) {
    res.render("cart", { title: "Shopping Cart"});
};

module.exports = {
    contact
    cart
};

/* Deleted for Lab 6 Task 4 Part 3
var index = function(req, res) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    index
};
*/