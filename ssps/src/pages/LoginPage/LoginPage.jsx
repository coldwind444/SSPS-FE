import React from 'react'
import classNames from 'classnames/bind'
import styles from './LoginPage.module.css'
import { asset } from '../../assets/asset'
import { useLocation } from 'react-router-dom';
const clx = classNames.bind(styles)

function LoginPage() {
  const location = useLocation();
  const userType = location.state?.userType || 'unknown';
  
  return (
    <div className={clx('loginform')}>
           <img 
              src={asset.logo} 
              alt="logo back khoa"
              className={clx("logobk")}
             />
            <span>
            <img 
              src={asset.sspsIcon} 
              alt="logo ssps"
              className={clx("ssps")}
             />
            </span>
            <h1 className={clx('the')} style={{fontSize: '50px'}}>Đăng nhập <b>{userType}</b> </h1>
            <div className={clx('form')}>
            <form className={clx('form-login')}>
            <div className={clx('input-group')}>
            <input 
              required
              type="text"
              id="username"
              name="username"
              placeholder=" "
            />
            <label>Tên đăng nhập</label>
          </div>
          <div className={clx('input-group')}>
          <input
              required
              type="password"
              id="password"
              name="password"
              placeholder=" "
            />
            <label>Mật khẩu</label>
          </div>
          <button type="submit" className={clx('login-button')}>
            Đăng nhập
          </button>
        </form>
        </div>
        </div>
  )
}

export default LoginPage;