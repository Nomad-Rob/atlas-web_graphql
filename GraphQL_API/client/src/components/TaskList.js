// Import React, gql from apollo-boost, and graphql from react-apollo
import React, { useState } from 'react';
import gql from 'apollo-boost';
import { graphql } from 'react-apollo';


// Define the GraphQL query
const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

// Define the TaskList component
function TaskList(props) {
  // Console.log the props
  console.log(props);
  // Optional: A state for managing selected task, if needed
  const [setSelected] = useState(null);

  // Function to display tasks
  function displayTasks() {
    const data = props.data;

    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => (
        <li key={task.id} onClick={() => setSelected(task.id)}>
          {task.title}
        </li>
      ));
    }
  }

  // Render method
  return (
    <div>
      <ul id="task-list">
        {displayTasks()}
      </ul>
    </div>
  );
}

// Bind the getTasksQuery to the TaskList component
export default graphql(getTasksQuery)(TaskList);
