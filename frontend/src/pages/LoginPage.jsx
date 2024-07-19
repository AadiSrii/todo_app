import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      navigation('/tasks');
    } catch (error) {
      alert('Error logging in');
    }
  };

  const goToRegister = () => {
    navigation('/register');
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white',
    marginBottom: '10px',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black' }}>
      <h2>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', backgroundColor: '#black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button type="submit" style={submitButtonStyle}>Login</button>
        <button type="button" onClick={goToRegister} style={registerButtonStyle}>Register a new</button>
      </form>
    </div>
  );
};

export default LoginPage;
