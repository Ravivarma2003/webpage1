import React, { useState } from 'react';
import '../styles.css';

const PasswordForm = ({ onSuccess }) => {
  const [input, setInput] = useState('');
  const correctPassword = 'iloveyou';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      onSuccess();
    } else {
      alert('Oops! Wrong password 💔');
    }
  };

  return (
    <div className="password-wrapper">
      <form onSubmit={handleSubmit} className="password-form fade-in">
        <h2>🔒 Enter the Secret Password</h2>
        <input
          type="password"
          placeholder="Your password..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
};

export default PasswordForm;
