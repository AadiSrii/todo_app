import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import TaskForm from './TaskForm';

const socket = io('http://localhost:4000', {
  auth: {
    token: localStorage.getItem('token')
  }
});

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('init', (initialTasks) => {
      setTasks(initialTasks);
    });

    socket.on('updateTasks', (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off('init');
      socket.off('updateTasks');
    };
  }, []);

  const addTask = (taskContent) => {
    const task = { id: Date.now(), content: taskContent, status: 'pending' };
    socket.emit('addTask', task);
  };

  const updateTask = (taskId, status) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    updatedTask.status = status;
    socket.emit('updateTask', updatedTask);
  };

  const deleteTask = (taskId) => {
    socket.emit('deleteTask', taskId);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    padding: '20px',
  };

  const taskListStyle = {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
    maxWidth: '600px',
    marginTop: '20px',
  };

  const taskItemStyle = {
    backgroundColor: 'black',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const buttonStyle = {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'white',
    marginLeft: '5px',
  };

  const inProgressButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffc107', // Yellow for in-progress
  };

  const completedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745', // Green for completed
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545', // Red for delete
  };

  return (
    <div style={containerStyle}>
      <TaskForm addTask={addTask} />
      <ul style={taskListStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={taskItemStyle}>
            {task.content} - {task.status}
            <div>
              <button onClick={() => updateTask(task.id, 'in-progress')} style={inProgressButtonStyle}>In Progress</button>
              <button onClick={() => updateTask(task.id, 'completed')} style={completedButtonStyle}>Completed</button>
              <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
