import { useState } from 'react';
import { darkTheme, lightTheme } from '@styles/theme.css.js';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div className={activeTheme}>
      <h1>안녕하세요!</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '라이트 모드로' : '다크 모드로'}
      </button>
    </div>
  );
}
