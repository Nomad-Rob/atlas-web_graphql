// Task 6 - setting up the task model

// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new schema for the task
const taskSchema = new Schema({
  name: String,
  description: String,
  projectID: String,
  completed: Boolean
});

// Export the model
module.exports = mongoose.model('Task', taskSchema);
