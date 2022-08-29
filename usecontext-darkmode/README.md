useContext를 활용한 Dark mode 만들기

lecture from 'https://youtu.be/LwvXVEHS638'

useContext hooks 사용 방법

1. src 파일에 'context' 이름의 폴더 생성

2. 각 파일에 아래와 같은 module 생성
   import { createContext } from 'react';
   // null -> 초기값
   export const UserContext = createContext(null);

3. App.js 최상위 파일에 다음과 같이 import 그리고
   아래와 같이 중첩, props로 전달
   
   import { ThemeContext } from './context/ThemeContext';
   import { UserContext } from './context/UserContext';

   return(
   <UserContext.Provider value={'???'}>
   // <ThemeContext.Provider>로 감싼
   // value 안의 값은, 하위 컴포넌트에 모두 접근 가능
   <ThemeContext.Provider value={{ isDark, setIsDark }}>
   <Page />
   </ThemeContext.Provider>
   </UserContext.Provider>
   )

 4. 필요로 하는 각 컴포넌트에 import 및 변수에 할당

   import React, { useContext } from 'react';
   import { ThemeContext } from '../context/ThemeContext';
   import { UserContext } from '../context/UserContext';

const { isDark } = useContext(ThemeContext);
const name = useContext(UserContext);
