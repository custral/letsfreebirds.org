import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Bird } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="app-wrapper">
      <header>
        <div className="container">
          <nav>
            <NavLink to="/" className="logo">
              <Bird className="bird-icon" size={32} />
              <span>Lets Free Birds</span>
            </NavLink>
            <div className="nav-links">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
              <NavLink to="/approach" className={({ isActive }) => isActive ? 'active' : ''}>
                Approach
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                Projects
              </NavLink>
              <NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''}>
                Donate
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Lets Free Birds Spiritual Liberation Front.</p>
          <p style={{ marginTop: '0.5rem' }}>This is a fake idea made by <a href="https://custral.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Custral.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
