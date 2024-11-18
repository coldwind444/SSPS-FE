import classNames from "classnames/bind";
import styles from './DefaultLayout.module.css';
import Navbar from "../../NavigationBar/Navbar";

const clx = classNames.bind(styles);

function DefaultLayout({children}){
    return (
        <div className={clx('wrapper')}>
            <Navbar/>
            <div className={clx('content')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;