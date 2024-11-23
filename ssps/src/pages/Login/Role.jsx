import React from 'react'
import classNames from 'classnames/bind'
import styles from './Role.module.css';
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom';
const clx = classNames.bind(styles)
function Role() {
  return (
      <div className={clx('Role')}>
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
            <h1 className={clx('the')} style={{fontSize: '50px'}}> Bạn là ai </h1>
            <div className={clx('choose')}>
                 <Link to="/login" 
                       state={{ userType: 'student' }}>
                      <button type="submit"className={clx('student')}>
                      <img src={asset.student} 
                       alt="student"
                       className={clx('student-butt')}
                       />
                      <span>Sinh Viên</span>
                      </button>
                  </Link>
                  <Link  to="/login" 
                       state={{ userType: 'sspo' }}>
                      <button type="submit" className={clx('sspo')} >
                      <img src={asset.ssps} 
                      alt="ssps"
                      className={clx('ssps-butt')}
                     />
                     <span> SPSO</span>
                     </button>
                  </Link>
           </div>   
        </div>
  )
}

export default Role