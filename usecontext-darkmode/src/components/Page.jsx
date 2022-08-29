import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
  // context로 전달한 정보를 받아오려면 useContext 훅 사용
  // const data = useContext(ThemeContext);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
