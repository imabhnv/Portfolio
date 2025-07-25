import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
