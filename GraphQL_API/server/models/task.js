// Task 6 - setting up the task model

// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
  title: String,
  weight: Number,
  description: String,
  projectId: String
});

module.exports = mongoose.model('Task', taskSchema);
