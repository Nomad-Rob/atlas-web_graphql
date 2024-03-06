// client/src/components/AddTask.js
import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getProjectsQuery, getTasksQuery, addTaskMutation } from '../queries/queries';

function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: '',
    weight: 1,
    description: '',
    projectId: ''
  });
  function displayProjects() {
    var data = props.getProjectsQuery;
    if (data) {
      return <option disabled>Loading projects...</option>;
    } else {
      return data.projects.map(project => {
        return (
          <option key={project.id} value={project.id}>{project.title}</option>
        );
      });
    }
  }

  const handleChange = (e) => {
        const newInputs = {
          ...inputs
        };
        if (e.target.name === "weight") newInputs[e.target.name] = parseInt(e.target.value)
        else newInputs[e.target.name] = e.target.value
        setInputs(newInputs)
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.addTaskMutation({
      variables: {
        title: inputs.title,
        weight: inputs.weight,
        description: inputs.description,
        projectId: inputs.projectId
      },
      refetchQueries: [{ query: getTasksQuery }]
    });
  };


  return (
  <form className="task" id="add-task" onSubmit={submitForm}>
    <div className="field">
      <label>Task title:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={inputs.title}
        required
      />
    </div>
    <div className="field">
      <label>Weight:</label>
      <input
        type="number"
        name="weight"
        onChange={handleChange}
        value={inputs.weight}
        required
      />
    </div>
    <div className="field" >
      <label>description:</label>
      <textarea
        name="description"
        onChange={handleChange}
        value={inputs.description}
        required
      />
    </div>
    <div className="field">
      <label>Project:</label>
      <select
        name="projectId"
        onChange={handleChange}
        value={inputs.projectId}
        required
      >
        <option value = "" disabled>Select project</option>
        {displayProjects()}
      </select>
    </div>
    <button>+</button>
    </form>
  );
}

export default compose(
  graphql(getProjectsQuery, { name: 'getProjectsQuery' }),
  graphql(addTaskMutation, { name: 'addTaskMutation' })
  )(AddTask);
