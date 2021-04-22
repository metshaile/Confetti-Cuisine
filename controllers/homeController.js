"use strict";

var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];



exports.showCourses = (req, res) => {
    res.render("courses", {
        offeredCourses: courses
    });
};

exports.showAboutus = (req, res) => {
    res.render("aboutus");
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.showRecipe = (req, res) => {
    res.render("recipes");
};

exports.showChef = (req, res) => {
    res.render("chef");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};