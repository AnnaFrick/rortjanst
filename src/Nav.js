import { Link } from 'react-router-dom';
// import './Nav.css';

const Nav = () => {
  return (
    <nav className="App-nav">
      <Link to="/">Hem</Link>
      <Link to="/about">Om företaget</Link>
    </nav>
  );
}

export default Nav;
