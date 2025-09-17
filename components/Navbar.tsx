
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, HistoryIcon, UserIcon, AdminIcon, ProfileIcon } from '../assets/icons';

const navItems = [
  { path: '/', label: 'Home', icon: <HomeIcon /> },
  { path: '/history', label: 'History', icon: <HistoryIcon /> },
  { path: '/user', label: 'User', icon: <UserIcon /> },
  { path: '/admin', label: 'Admin', icon: <AdminIcon /> },
  { path: '/profile', label: 'Profile', icon: <ProfileIcon /> },
];

interface NavbarProps {
  position?: 'fixed' | 'absolute';
}

const Navbar: React.FC<NavbarProps> = ({ position = 'fixed' }) => {
  const activeLinkClass = 'text-brand-orange';
  const inactiveLinkClass = 'text-gray-500 hover:text-brand-orange';

  return (
    <nav className={`${position} bottom-0 left-0 right-0 bg-brand-light/80 backdrop-blur-sm shadow-t border-t border-gray-200`}>
      <div className="flex justify-around max-w-xl mx-auto px-4 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            {item.icon}
            <span className="text-s font-medium mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
