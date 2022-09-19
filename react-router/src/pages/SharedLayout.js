import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      {/* 1. 부모 라우터 컴포넌트에서 Outlet을 import 해준 후 
      서브 페이지가 보여질 위치를 Outlet으로 지정 */}
      {/* 2. Outlet으로 지정해준 자리에 서브 페이지로 보여줄 컴포넌트가 나타난다. */}
      <Outlet />
    </>
  );
};

export default SharedLayout;
