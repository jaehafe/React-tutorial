import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/products">products</Link>
    </nav>
  );
};

export default Navbar;
