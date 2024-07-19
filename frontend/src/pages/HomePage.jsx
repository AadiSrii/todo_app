import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToTasks = () => {
    navigate('/tasks');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white',
    margin: '10px',
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
  };

  const goToTasksButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green', 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', paddingLeft:'10px', paddingRight:'10px', backgroundColor: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to the To-Do List Application</h1>
        <button
          onClick={goToRegister}
          style={registerButtonStyle}
        >
          Register
        </button>
        <button
          onClick={goToTasks}
          style={goToTasksButtonStyle}
        >
          Go to Tasks
        </button>
      </div>
    </div>
  );
};

export default HomePage;
