import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {}
  return (
  <button onClick={() => setDarkMode(!darkMode) }>
    {darkMode ? <Sun /> : <Moon />}
  </button>
  );
};

export default ModeCtrl;