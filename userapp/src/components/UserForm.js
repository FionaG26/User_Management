import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = { name, email, password };
    try {
      await axios.post('http://localhost:3000/users', newUser);
      setName('');
      setEmail('');
      setPassword('');
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label>
      <label>Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
      <label>Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} /></label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

