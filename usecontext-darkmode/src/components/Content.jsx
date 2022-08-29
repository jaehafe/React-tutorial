import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const name = useContext(UserContext);
  return (
    <div
      className="contenxt"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>{name}님, 좋은 하루되세요</p>
    </div>
  );
};

export default Content;
