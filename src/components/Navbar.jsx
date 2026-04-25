import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">Simar.dev</NavLink>
      <ul className="navbar-links">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/contact" className="nav-contact-btn">Contact</NavLink></li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
