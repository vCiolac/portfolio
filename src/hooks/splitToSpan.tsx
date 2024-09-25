import { ReactNode } from 'react';

export const splitToSpan = (text: ReactNode, spanClass = '') => {
  if (!text) return <></>;

  const newText = String(text);

  return (
    <>
      {newText.split('').map((char, index) => (
        <span
          key={`${index}-${char}`}
          className={spanClass ? `inline ${spanClass}` : 'inline'}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};
