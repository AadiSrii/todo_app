import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    margin: '0 auto',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Task</button>
    </form>
  );
};

export default TaskForm;
