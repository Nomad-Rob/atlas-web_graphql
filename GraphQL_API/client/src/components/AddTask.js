// client/src/components/AddTask.js
import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getProjectsQuery, getTasksQuery, addTaskMutation } from '../queries/queries';

const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

function AddTask(props) {
  function displayProjects() {
    const { loading, projects } = props.data;

    if (loading) {
      return <option>Loading projects...</option>;
    } else {
      return projects.map(project => (
        <option key={project.id} value={project.id}>
          {project.title}
        </option>
      ));
    }
  }

  return (
    <select>
      <option>Select Project</option>
      {displayProjects()}
    </select>
  );
}

export default graphql(getProjectsQuery)(AddTask);
