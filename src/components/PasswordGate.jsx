import React, { useState } from 'react';
import '../styles.css';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const correctPassword = 'forever'; // 💡 Set your own password here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      alert('Wrong password, my love 💔');
    }
  };

  return (
    <div className="password-page">
      <form className="password-form" onSubmit={handleSubmit}>
        <h2>💌 A Letter Awaits...</h2>
        <input
          type="password"
          placeholder="Enter the secret password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
}
