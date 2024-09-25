import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ThemeToggler = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('dark');
      setTheme('dark');
    } else {
      root.classList.remove('dark');
      setTheme('light');
    }
  };

  useEffect(() => {
    const ball = document.querySelector('.ball');
    if (ball) {
      gsap.to(ball, {
        rotation: 360,
        duration: 0.5,
        ease: "linear",
        repeat: -1,
        paused: true
      });
    }
  }, []);

  const handleMouseEnter = () => {
    gsap.to('.ball', { rotation: 360, duration: 0.5, ease: "linear", repeat: 0 });
  };

  const handleMouseLeave = () => {
    gsap.to('.ball', { rotation: 0, duration: 0.5, ease: "linear", repeat: 0 });
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-6 h-6 flex items-center justify-center rounded-full transition mx-2 border-white border-[1px]"
      aria-label="Toggle theme"
    >
      <div
        className={`ball w-full h-full rounded-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
        style={{
          background: theme === 'dark' ? 'linear-gradient(to right, black 50%, white 50%)' : 'linear-gradient(to right, white 50%, black 50%)',
        }}
      />
    </button>
  );
};

export default ThemeToggler;
