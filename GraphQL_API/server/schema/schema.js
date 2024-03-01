// Setting up Schema for GraphQL

const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

// Define the TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'This represents a Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});

// Define the RootQuery for the TaskType
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by the application',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // resolve with data
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
