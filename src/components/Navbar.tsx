import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </Link>
          
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar