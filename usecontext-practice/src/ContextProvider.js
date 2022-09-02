import { useState, useContext, createContext } from 'react';

export const MyContext = createContext();

// custom hook
export const useSignin = () => {
  return useContext(MyContext);
};

// {children} : 어떤 데이터가 어떤식으로 올 지 모를때 사용
const SigninProvider = ({ children }) => {
  const [signin, setSignin] = useState(false);
  const name = 'Adam';

  return (
    // value 2가지 이상일 경우, {} 묶어서 pass함.
    <MyContext.Provider value={{ signin, name }}>
      <button
        onClick={() => {
          setSignin((signin) => !signin);
        }}
      >
        Sign {signin ? 'Out' : 'In'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* <Card1 />
        <Card2 />
        <Card3 /> */}
        {children}
      </div>
    </MyContext.Provider>
  );
};

export default SigninProvider;
