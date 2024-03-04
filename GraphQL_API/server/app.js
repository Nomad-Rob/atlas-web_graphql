// Initialize the server set on port 8080

// Importing the express module
const express = require('express');
// Importing the express-graphql middleware
const {graphqlHTTP} = require('express-graphql');
// Importing the TaskType from the schema
const schema = require('./schema/schema');

// Require the mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

const app = express();

// Use the graphqlHTTP middleware with your schema
app.use('/graphql', graphqlHTTP({
  schema: schema, // Make sure this references the schema you've defined
  graphiql: true, // Enables the GraphiQL interface
}));

// Listening for requests on port 8080
app.listen(8080,()=>{
  console.log('now listening for request on port 8080');
});
