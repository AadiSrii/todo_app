import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/register', { username, password });
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  const goToLogin = () => {
    navigation('/login');
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

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black' }}>
      <h2>Register</h2>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', backgroundColor: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handleRegister}>
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
        <button type="submit" style={registerButtonStyle}>Register</button>
        <button type="button" onClick={goToLogin} style={loginButtonStyle}>Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
