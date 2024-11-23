import React from 'react'
import './Homepage.module.css'
import classNames from 'classnames/bind'
import styles from './Homepage.module.css';
import { asset } from '../../assets/asset'
import Navbar from '../../component/NavigationBar/Navbar';
import { Link } from 'react-router-dom';
const clx = classNames.bind(styles)

const Homepage = () => {
  return (
    <div className={clx('wrapper')}>
    <Navbar/>
    <div className={clx("content")}>
        <img
          src={asset.sspsIcon} 
          alt="Logo In Ấn"
          className={clx("logoin")}
        />
      <h1 style={{fontSize: '40px'}}>
        DỊCH VỤ IN ẤN THÔNG MINH
        <br />
        TRƯỜNG ĐẠI HỌC BÁCH KHOA TP.HCM
      </h1>
      <p >
      Hệ thống in ấn dành riêng cho sinh viên Bách Khoa, giúp tiết <br/>kiệm chi phí, thời gian mà vẫn đảm bảo chất lượng. In tài liệu mọi <br/>lúc, mọi nơi chỉ với một cú click chuột !
      </p>
      <Link to='/auth' className={clx('cta-button')}>In ngay</Link>
    </div>
     </div>
   
  )
}

export default Homepage