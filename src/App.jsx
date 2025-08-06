import React, { useState } from 'react';
import PasswordGate from './components/PasswordGate';
import LoveLetter from './components/LoveLetter';
import './styles.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  return (
    <div className="app-container">
      {isUnlocked ? <LoveLetter /> : <PasswordGate onUnlock={() => setIsUnlocked(true)} />}
    </div>
  );
}

export default App;
