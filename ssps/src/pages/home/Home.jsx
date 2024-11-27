import React from 'react'
import './Home.module.css'
import classNames from 'classnames/bind'
import styles from './Home.module.css';
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom';
const clx = classNames.bind(styles)
function Home() {
  return (
    <div className={clx('concu')}>
        <div className={clx('content')}>
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
      Hệ thống in ấn dành riêng cho sinh viên Bách Khoa, giúp tiết <br/>kiệm chi phí, thời gian mà vẫn đảm bảo chất lượng. <br/> In tài liệu mọi lúc, mọi nơi chỉ với một cú click chuột !
      </p>
      <Link to='/student/print' className={clx('cta-button')}>In ngay</Link>
    </div>
    </div>
  )
}

export default Home