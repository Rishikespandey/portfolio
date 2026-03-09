import { useState, useEffect } from 'react';

export function useTyping(phrases, typingSpeed = 100, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      if (text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, typingSpeed / 2);
      }
    } else {
      if (text.length === currentPhrase.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, pauseTime]);

  return text;
}
