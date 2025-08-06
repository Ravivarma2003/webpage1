import React, { useState, useEffect } from 'react';
import '../styles.css';

const letter = `
This may be the first letter that I write and you read—if I don’t get caught this time. There’s something I’ve been carrying in my heart for a long time now, something I’ve never quite been able to put into words. I want to share this with you, but I don’t know how. I never find the exact words that can resonate my feelings about you. Maybe that’s because what I feel for you is more than just words. Maybe it’s something deeper than language, something too big for paper. It’s something more than what a person can fully understand, something too deep to explain, too strong to describe. It’s the kind of feeling that goes beyond words and lives quietly in the heart.

I love you. And no matter how many words I search for, none can ever replace the weight and truth of those three. You’re not someone I can walk away from just because others might not accept. You’re someone I would stand up for—fight for—without hesitation. You’re someone I want to take care of, to be responsible for, not out of obligation, but because you matter that much to me.

You are worth every risk, every choice, and every change. I’ve never changed for anyone before, but I love you enough to grow into the person you can always feel safe and happy with. Not because I need to, but because I truly want to. I want to be someone you can trust, someone who brings calm to your chaos and warmth to your days. I will never hurt you—not in words, not in actions. All I want is to give you the kind of love that feels like home, where you can be your full self and still feel cherished—always.

I know that every relationship has its share of ups and downs—ours won’t be perfect either. There will be good days filled with laughter and love, and there might be days when we don’t see eye to eye or when life feels a little heavy. But that’s the truth of any real connection—it comes with both pros and cons. What matters is that through it all, I choose you. I’m not here just for the easy parts. I’m here for everything—for the challenges, the growth, the joy, the love, and even the moments when things feel tough. Because loving you, being with you, is worth it all.

I could write down everything I feel for you, fill pages and pages—but even then, it wouldn’t be enough. My memory couldn’t hold it all. And when we fight (because we probably will), I promise I’ll be the first to say sorry. But hey, you really need to learn how to get jealous, how to get angry—at least a little! Otherwise, how will I ever get the chance to beg for your forgiveness, that’s the process, right? I’ll even shut my mouth whenever you tell me “Shut up”—no questions asked. It’s just that it’s been so long, and I’ve been carrying all this love alone. It gets heavy sometimes… so, will you help me carry some of it now?
`;

const LoveLetter = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (index < letter.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + letter[index]);
        setIndex(prev => prev + 1);
      }, 5); // Fast speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="letter-page">
      <div className="letter-container">
        <h1 className="letter-title">To Someone Who Means Everything 💖</h1>
        <p className="typed-letter">{displayedText}</p>
        {index === letter.length && (
          <p className="signature">— Yours Always</p>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;

