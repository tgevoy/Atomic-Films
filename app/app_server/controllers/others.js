"use strict";

const contact = function(req, res) {
    res.render("contact", {
			title: "Atomic Films",
      pageHeader: {
        title: "Contact Atomic Films",
        tagline: "Thanks for your interest in Atomic Films. Feel free to send us a message by filling out the form below and we'll be happy to answer any questions you may have as soon as possible."
      }
    });
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