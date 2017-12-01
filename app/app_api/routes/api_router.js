/*
'use strict';

// Sets up as an Express Router (Lab 11 Task 2 Part 5)
const express = require('express');
const router = express.Router();

// Require Controllers that will handle all the API Requests, separating routing code from routing logic (Lab 11 Task 2 Part 6)
const moviesAPIController = require('../controllers/movies-api');
const movieTimesAPIController = require('../controllers/movie-times-api');

// Defining API Routes and setting up the Controllers (Lab 11 Task 3 Part 1)
/* -- movies -- */
