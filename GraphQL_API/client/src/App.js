import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <div id="main">
        <div id="bg"></div>
        <h1>Holberton School Tasks</h1>
        <TaskList />
        <AddProject />
        <AddTask />
      </div>
    </ApolloProvider>
  );
}

export default App;
