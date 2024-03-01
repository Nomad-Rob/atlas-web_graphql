// Initialize the server set on port 8080

// Importing the express module
const express = require('express');
// Importing the express-graphql middleware
const {graphqlHTTP} = require('express-graphql');
// Importing the TaskType from the schema
const { TaskType } = require('./schema/schema.js');

const app = express();

// Setting up the graphql middleware
app.use('/graphql',graphqlHTTP({
  schema: TaskType,
  graphiql: true,
}));

// Listening for requests on port 8080
app.listen(8080,()=>{
  console.log('now listening for request on port 8080');
});
