import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed: number;
  reset: boolean;
}

const TypeWriter: React.FC<TypewriterTextProps> = ({ text = '', speed, reset }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      if (currentIndex < text.length) {
        const nextChar = text[currentIndex] || '';
        if (nextChar && nextChar !== 'undefined') {
          setDisplayedText((prev) => prev + nextChar);
        }
        currentIndex++;
        timeoutId = setTimeout(typeWriter, speed);
      }
    };

    if (reset && text) {
      setDisplayedText('');
      currentIndex = 0;
      typeWriter();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [reset, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypeWriter;
