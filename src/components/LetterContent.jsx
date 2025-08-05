import React, { useEffect, useState } from 'react';
import '../styles.css';

const letter = `I just wanted to say something that’s been on my heart.

I love you. Honestly, deeply, and with everything I have. You mean more to me than I could ever explain in words. You’re not just someone I care about—you’re the most important person in my life.

No matter what happens, I want you to know this: I can’t leave you. I won’t. You’re a part of me now, and I can’t imagine life without you. You matter to me more than I even matter to myself.

You make my world better just by being in it. Your smile, your laugh, the way you are—it all means everything to me. And I feel lucky every day that I get to love you.

Even if times get tough, or if we ever face problems, I’m not going anywhere. I’m here. Always.`;

const LetterContent = () => {
  const [text, setText] = useState('');
  const speed = 20;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + letter[i]);
      i++;
      if (i === letter.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="letter-wrapper fade-in">
      <div className="letter-box">
        <h1>To Someone Special 💌</h1>
        <p className="letter-text">{text}</p>
        <p className="signature">— Yours Always</p>
      </div>
    </div>
  );
};

export default LetterContent;
