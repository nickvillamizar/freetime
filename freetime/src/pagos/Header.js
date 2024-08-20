import React from 'react';
import './Header.css';

const Header = ({ title, logoSrc, userImgSrc }) => {
  return (
    <div className="header">
      <img src={logoSrc} alt="Logo" />
      <span className="title">{title}</span>
      <div className="user">
        <img src={userImgSrc} alt="Usuario" />
        <span>≡</span>
      </div>
    </div>
  );
};

export default Header;
