# GraphQL API Project
This project is an exploration into the world of GraphQL, Apollo Client, and Express.js, aimed at creating a full-stack application that includes user authentication, file management, and more. It encompasses setting up a GraphQL server with Express.js, integrating MongoDB for data storage, and employing Apollo Client within a React.js frontend.

## Resources
Read or Watch:
GraphQL
GraphQL: Schemas and Types
GraphQL: Queries and Mutations
Mongoose
Apollo-boost
Apollo Client (React)


## Learning Objectives
By the end of this project, you should be able to explain:

What GraphQL is and its benefits.
The purpose and use of GraphiQL.
How to perform tests with GraphiQL.
What Apollo Client is and how it integrates with React.
The process of connecting a project to MongoDB.
How to perform GraphQL queries from a React application.
Configuring a GraphQL server to accept requests from a different origin.

## Requirements
Use of Visual Studio Code, vi, vim, or emacs as editors.
All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x).
Ensure all files end with a newline.
Code should use the .js extension.

## Setup
### Install NodeJS
sudo apt install nodejs
node -v
npm -v

###Setup Express and GraphQL
Within your GraphQL server folder:

Initialize your project:
npm init

Install Express and save it in your project's dependencies:
npm install express --save

Set up GraphQL:
npm install graphql express-graphql

Setup Apollo
npm i apollo-boost graphql react-apollo --save


## Tasks Overview
1. GraphQL Schema: Setup the initial GraphQL schema.
2. Root Query: Define a root query for fetching specific data.
3. Resolve Function & Test with GraphiQL: Implement resolve functions and test queries.
4. GraphQL ID Type & Project Type: Introduce GraphQL ID type and define project type.
5. Type Relations: Establish relations between different types.
6. Connecting to MongoDB Atlas & Creating Mongoose Models: Setup MongoDB and define schemas.
7. Mutation: Implement mutations for adding tasks and projects.
8. Updating Resolve Functions: Modify resolve functions to fetch data from MongoDB.
9. Setting Up Apollo Client: Integrate Apollo Client with the React frontend.
10. Making Queries from React: Perform GraphQL queries from React components.
11. External Query File: Organize queries into an external file for better code management.
12. Query Variables & Composing Queries: Use variables in queries and compose multiple queries in a component.
13. Tasks Details Query: Create a detailed task query and implement a corresponding component.

## Project Structure
server/: Contains all backend code including Express setup and GraphQL schemas.
client/: React frontend application integrated with Apollo Client.
client/src/queries: Directory for GraphQL queries and mutations.

## Running the Project

Ensure MongoDB and Redis servers are running, then start the backend server:
cd server
npm start

To run the React frontend:
cd client
npm install
npm start

Access the GraphQL interface via http://localhost:4000/graphql and the React application on http://localhost:3000.

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check the issues page.
