import React, { useState } from 'react';
import { loginUser } from '../../services/api';
import { User } from '../../types';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    const user: User | null = await loginUser(email, password);
    if(user) navigate("/main", { state: { email: user.email } });

    setEmail('');
    setPassword('');
  };

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'> Email:
          <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor='password'> Password:
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
