import React, { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'???'}>
      {/* <ThemeContext.Provider>로 감싼
     value 안의 값은, 하위 컴포넌트에 모두 접근 가능 */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
