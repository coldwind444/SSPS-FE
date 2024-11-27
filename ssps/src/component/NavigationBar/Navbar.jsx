import React, { useState, useEffect } from 'react';
import { asset } from '../../assets/asset';
import classNames from 'classnames/bind';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const clx = classNames.bind(styles)

function Navbar({isAuthenticated, userType, userName}) {

  const [menu,setMenu]=useState("Trang chủ")

  return (
    <div className={clx("navbar")}>
      <div className={clx("navbar-left")}>
        <img src={asset.logo} alt="BK-SSPS logo" className={clx("logo")} />
        <span className={clx("navbar-brand", 'primary-text')}>BK-</span>
        <span className={clx("navbar-brand", 'dark-text')}>SSPS</span>
      </div>
      <div className={clx("navbar-center")}>
         {isAuthenticated === true ? 
         (userType === 'student' ? 
          (<ul className={clx('list')}>
            <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/student'>Trang chủ</Link></li>
            <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/student/print'>In tài liệu</Link></li>
            <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/student/buy'>Mua trang in</Link></li>
            <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/student/history'>Lịch sử</Link></li>
          </ul>)
         :(<ul className={clx('list')} >
          <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/spso'>Trang chủ</Link></li>
          <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/spso/manage'>Quản lý máy in</Link></li>
          <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/spso/config'>Cấu hình</Link></li>
          <li className={clx('nav-item')}><Link className={clx('nav-link')} to='/spso/history'>Lịch sử</Link></li>
        </ul>))
         :(<ul className={clx('list')} ></ul>)}
      </div>
      {isAuthenticated === true ? 
      (
        <div className={clx("navbar-right")}>
          <button className={clx("user-button")}>
            <FontAwesomeIcon icon={faBell} className={clx('icon')}/>
          </button>
          <div className={clx("user-avatar")}>{userName}</div>
          <button className={clx("user-button")}>
            <FontAwesomeIcon icon={faChevronDown} className={clx('icon')}/>
          </button>
        </div>
      )
      :(
        <div className={clx("navbar-right")}>
          <Link to='/role' className={clx('login-btn')}>Đăng nhập</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
