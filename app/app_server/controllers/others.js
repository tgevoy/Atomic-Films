"use strict";

const contact = function(req, res) {
  res.render("contact", {
    brandName: "Atomic Films",
    pageTitle: "Contact Atomic Films",
    pageHeader: {
      brandMotto: "...enjoy the classics of yesterday, today!",
      message: "Thanks for your interest in Atomic Films. Feel free to send us a message by filling out the form below and we'll be happy to answer any questions you may have as soon as possible."
		}
  });
};

module.exports = {
  contact
};
