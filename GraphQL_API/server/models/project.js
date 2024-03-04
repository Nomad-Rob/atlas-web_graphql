// task 6 - setting up the task model

// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new schema for the project
const projectSchema = new Schema({
  name: String,
  description: String,
  completed: Boolean
});

// Export the model
module.exports = mongoose.model('Project', projectSchema);
