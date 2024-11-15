import React, { useState, useEffect } from 'react';
import { asset } from '../assets/asset';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={asset.logo} alt="BK-SSPS logo" className="logo" />
        <span className="navbar-brand">BK-SSPS</span>
      </div>
      <div className="navbar-center">
        <a
          href="/"
          className={`navbar-link ${activeLink === '/' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/')}
        >
          Trang chủ
        </a>
        <a
          href="/in-tai-lieu"
          className={`navbar-link ${activeLink === '/in-tai-lieu' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/in-tai-lieu')}
        >
          In tài liệu
        </a>
        <a
          href="/mua-trang-in"
          className={`navbar-link ${activeLink === '/mua-trang-in' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/mua-trang-in')}
        >
          Mua trang in
        </a>
        <a
          href="/lich-su"
          className={`navbar-link ${activeLink === '/lich-su' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/lich-su')}
        >
          Lịch sử
        </a>
      </div>
      <div className="navbar-right">
        <button className="notification-button">
          <img src={asset.notif} alt="Notification Icon" className="notif" />
        </button>
        <div className="user-avatar">S</div>
        <button className="dropdown-button">
          <img src={asset.arrow} alt="Dropdown Icon" className="dropdown-icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
