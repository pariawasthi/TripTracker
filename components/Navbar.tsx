import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, HistoryIcon, UserIcon, AdminIcon, ProfileIcon } from '../assets/icons';

const navItems = [
  { path: '/', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
  { path: '/history', label: 'History', icon: <HistoryIcon className="w-5 h-5" /> },
  { path: '/user', label: 'User', icon: <UserIcon className="w-5 h-5" /> },
  { path: '/admin', label: 'Admin', icon: <AdminIcon className="w-5 h-5" /> },
  { path: '/profile', label: 'Profile', icon: <ProfileIcon className="w-5 h-5" /> },
];

interface NavbarProps {
  position?: 'fixed' | 'absolute';
}

const Navbar: React.FC<NavbarProps> = ({ position = 'fixed' }) => {
  const activeLinkClass =
    'text-brand-orange bg-brand-light rounded-lg px-2 py-1 shadow-md';
  const inactiveLinkClass = 'text-gray-500 hover:text-brand-orange';
  const adminHighlightClass =
    'text-white bg-brand-orange rounded-lg px-2 py-1 shadow-lg font-semibold';

  return (
    <nav
      className={`${
        position === 'fixed' ? 'fixed' : 'absolute'
      } bottom-0 left-0 right-0 bg-brand-light/90 backdrop-blur-sm border-t border-gray-200 z-50`}
    >
      <div className="flex justify-around max-w-[300px] mx-auto px-2 py-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-xs transition-colors duration-200 ${
                item.label === 'Admin'
                  ? adminHighlightClass
                  : isActive
                  ? activeLinkClass
                  : inactiveLinkClass
              }`
            }
          >
            {item.icon}
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
