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

const thanks = function(req, res) {
  res.render("thanks", {
    brandName: "Atomic Films",
    pageTitle: "Coming Soon",
    pageHeader: {
      brandMotto: "...enjoy the classics of yesterday, today!",
      message: "Your message is important to us, we are currently working on our feedback system. Check back shortly and thanks for using Atomic Films for your entertainment needs."
		}
  });
};

module.exports = {
  contact,
  thanks 
};
