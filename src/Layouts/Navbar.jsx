import {
  CloseOutlined,
  NotificationsOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h4>defiart</h4>
      </div>
      <div className="nav__right dropdown-menu-container">
        <NotificationsOutlined className="nav__notify" />
        <SearchOutlined className="nav__search" />
        {/* <p className="nav__new--notification">1</p> */}
        <CloseOutlined
          className="nav__close  dropdown-menu-toggle"
          onClick={toggleMenu}
        />

        {isMenuOpen && (
          <div className="dropdown-menu-content">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
