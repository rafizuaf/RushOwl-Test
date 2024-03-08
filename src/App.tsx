import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isValidEmail = useCallback((emailToCheck: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToCheck);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://www.sample.app/login', {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);

    }
  }, [email, password, isValidEmail]);

  const memoizedIsValidEmail = useMemo(() => isValidEmail, [isValidEmail]);
  console.log('memoizedIsValidEmail', memoizedIsValidEmail);


  return (
    <div style={
      {
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type='submit' onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginPage;
