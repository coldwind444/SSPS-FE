import React, { useState, useEffect } from 'react';
import { asset } from '../../assets/asset';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
 const [menu,setMenu]=useState("Trang chủ")

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={asset.logo} alt="BK-SSPS logo" className="logo" />
        <span className="navbar-brand">BK-SSPS</span>
      </div>
      <ul className="navbar-center">
         <Link to='/homepage' >
         <li onClick={()=>setMenu("Trang chủ")} className={menu=="Trang chủ"?"active":""}> Trang chủ</li>
         </Link>
         <Link to='/printing' >
         <li onClick={()=>setMenu("In tài liệu")} className={menu=="In tài liệu"?"active":""}>In tài liệu</li> 
         </Link>
         <Link to='/buying' >
         <li onClick={()=>setMenu("Mua trang in")} className={menu=="Mua trang in"?"active":""}>Mua trang in</li>
         </Link>
         <Link to='/history' >
         <li onClick={()=>setMenu("Lịch sử")} className={menu=="Lịch sử"?"active":""}>Lịch sử</li> 
         </Link>
      </ul>
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
