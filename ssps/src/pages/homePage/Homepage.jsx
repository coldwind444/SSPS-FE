import React from 'react'
import './Homepage.module.css'
import classNames from 'classnames/bind'
import styles from './Homepage.module.css';
import { asset } from '../../assets/asset'
import Navbar from '../../component/NavigationBar/Navbar';
const clx = classNames.bind(styles)

const Homepage = () => {
  return (
    <div className={clx('wrapper')}>
            <Navbar/>
    <div className={clx("homepage")}>
    <div className={clx("background")}>
      <img
        src={asset.homeBackground} 
        alt="Trường Đại học Bách Khoa"
        className={clx("background-img")}
      />
    </div>
    <div className={clx("content")}>
        <img
          src={asset.sspsIcon} 
          alt="Logo In Ấn"
          class={clx("logoin")}
        />
      <h1>
        DỊCH VỤ IN ẤN THÔNG MINH
        <br />
        TRƯỜNG ĐẠI HỌC BÁCH KHOA TP.HCM
      </h1>
      <p>
      Hệ thống in ấn dành riêng cho sinh viên Bách Khoa, giúp tiết <br/>kiệm chi phí, thời gian mà vẫn đảm bảo chất lượng. In tài liệu mọi <br/>lúc, mọi nơi chỉ với một cú click chuột !
      </p>
      <button className={clx("cta-button")}>In ngay</button>
    </div>
            </div>
        </div>
   
  )
}

export default Homepage