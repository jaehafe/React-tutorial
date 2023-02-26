import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log('user', user);
  console.log(isDark); // false

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>welcome {user}!</h1>
    </header>
  );
}

export default Header;
