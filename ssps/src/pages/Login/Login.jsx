import React from 'react'
import './Login.module.css'
import classNames from 'classnames/bind'
import styles from './Login.module.css'
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import AuthLayout from '../../component/Layout/AuthLayout/AuthLayout';
const clx = classNames.bind(styles)
function Login() {
  const location = useLocation();
  const userType = location.state?.userType || 'unknown';
  return (
    <AuthLayout>
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
            <h1 className={clx('the')} style={{fontSize: '50px'}}> Đăng Nhập <b>{userType}</b> </h1>
            <div className={clx('form')}>
            <form className={clx('form-login')}>
            <div className={clx('input-group')}>
            <label >Tên Đăng Nhập</label>
            <input
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className={clx('input-group')}>
            <label ></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mật khẩu"
            />
          </div>
          <button type="submit" className={clx('login-button')}>
            Đăng nhập
          </button>
        </form>
        </div>
        </div>
    </AuthLayout>
  )
}

export default Login