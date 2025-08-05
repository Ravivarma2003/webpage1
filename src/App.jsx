import React, { useState } from 'react';
import PasswordForm from './components/PasswordForm';
import LetterContent from './components/LetterContent';
import './styles.css';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div className="app-container">
      {isAuthorized ? (
        <LetterContent />
      ) : (
        <PasswordForm onSuccess={() => setIsAuthorized(true)} />
      )}
    </div>
  );
}

export default App;
