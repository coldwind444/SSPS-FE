import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './PrintingPage.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFileExcel, faFilePdf, faFilePowerpoint, faFileWord, faImages } from "@fortawesome/free-solid-svg-icons";

const clx = classNames.bind(styles)

function PrintingPage(){
    const [file, setFile] = useState(null);

    const printers = ['001 - CS2 - H6 - Tầng 1', '002 - CS2 - H6 - Tầng 1', '003 - CS2 - H6 - Tầng 1' ];

    const papers = ['A5', 'A4', 'A3'];

    const iconMap = {
        'image/png': {
            icon: faImages,
            theme: 'image'
        },

        'image/jpg': {
            icon: faImages,
            theme: 'image'
        },

        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
            icon: faFileWord,
            theme: 'doc'
        },

        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            icon: faFileExcel,
            theme: 'excel'
        },

        "application/pdf": {
            icon: faFilePdf,
            theme: 'pdf'
        },

        "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
            icon: faFilePowerpoint,
            theme: 'ppt'
        },
    }

    useEffect(() => {
        console.log(file);
    }, [file])

    const showFile = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile){
            setFile(selectedFile);
        }
    }

    return (
        <div className={clx('wrapper')}>
            <div className={clx('file-container')}>
                <h2>Tải tệp lên</h2>
                {file === null ? (
                    <div className={clx('file-area')}>
                        <h3>Tải tài liệu lên</h3>
                        <FontAwesomeIcon className={clx('cloud')} icon={faCloudArrowUp}/>
                        <p><span>Định dạng cho phép:</span> .doc .xls .xlsx .ppt .jpg .png .pdf</p>
                        <p><span>Kích thước tối đa:</span>100MB</p>
                    </div>
                ):(
                    <div className={clx('file-area')}>
                        <FontAwesomeIcon icon={iconMap[file.type].icon} className={clx('file-icon',iconMap[file.type].theme)}/>
                        <a download={file.name} href={URL.createObjectURL(file)} className={clx('file-name')}>{file.name}</a>
                    </div>
                )}
                <div className={clx('file-input')}>
                    <input onChange={(e) => showFile(e)} type="file" id='file' className={clx("file-input__input")}/>
                    <label htmlFor="file" className={clx("file-input__label")}>
                        <span>Tải lên</span>
                    </label>
                </div>
            </div>
            <div className={clx('props-container')}>
                <h2>Thuộc tính trang in</h2>
                <form className={clx('props-form')}>
                    <div className={clx('printer-field')}>
                        <label htmlFor="printer-cb" className={clx('input-label', 'text-bold')}>Chọn máy in</label>
                        <div className={clx('combo-box', 'width-large')} >
                            <select id="printer-cb">
                                {printers.map((printer, index) => (
                                    <option key={index}>{printer}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={clx('paper-field')}>
                        <div className={clx('paper-cbbox')}>
                            <label htmlFor="paper-cb" className={clx('input-label', 'text-bold')}>Khổ giấy</label>
                            <div className={clx('combo-box', 'width-medium')} >
                                <select id="paper-cb">
                                    {papers.map((paper,index) => (
                                        <option key={index}>{paper}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={clx('orient-cbbox')}>
                            <label htmlFor="orient-cb" className={clx('input-label', 'text-bold')}>Hướng</label>
                            <div className={clx('combo-box', 'width-medium')} >
                                <select id="orient-cb">
                                    <option>Dọc</option>
                                    <option>Ngang</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={clx('print-field')}>
                        <div className={clx('copies-box')}>
                            <label htmlFor="copies-nbox" className={clx('input-label', 'text-bold')}>Số bản in</label>
                            <div className={clx('number-box', 'width-medium')}  ><input type="number" id="copies-nbox"/></div>
                        </div>
                        <div className={clx('radio-box')}>
                            <input type="radio" id='radio1'/>
                            <label className={clx('input-label', 'text-bold')} htmlFor="radio1">In 1 mặt</label>
                        </div>
                        <div className={clx('radio-box')}>
                            <input type="radio" id="radio2"/>
                            <label className={clx('input-label', 'text-bold')} htmlFor="radio2">In 2 mặt</label>
                        </div>
                    </div>
                    <div className={clx('margin-field')}>
                        <label className={clx('input-label', 'text-bold')}>Căn lề</label>
                        <div className={clx('margin-lr')}>
                            <div className={clx('margin-nbox')}>
                                <label htmlFor="lmargin-box" className={clx('input-label', 'text-normal')}>Trái</label>
                                <div className={clx('number-box', 'small')} ><input type="number" id='lmargin-box'/></div>
                            </div>
                            <div className={clx('margin-nbox')}>
                                <label htmlFor="rmargin-box" className={clx('input-label', 'text-normal')}>Phải</label>
                                <div className={clx('number-box', 'small')} ><input type="number" id='rmargin-box'/></div>
                            </div>
                        </div>
                        <div className={clx('margin-tb')}>
                            <div className={clx('margin-nbox')}>
                                <label htmlFor="tmargin-box" className={clx('input-label', 'text-normal')}>Trên</label>
                                <div className={clx('number-box', 'small')} ><input type="number" id='tmargin-box'/></div>
                            </div>
                            <div className={clx('margin-nbox')}>
                                <label htmlFor="bmargin-box" className={clx('input-label', 'text-normal')}>Dưới</label>
                                <div className={clx('number-box', 'small')} ><input type="number" id='bmargin-box'/></div>
                            </div>
                        </div>
                    </div>
                    <div className={clx('btn-field')}>
                        <button className={clx('round-btn', 'cancel')}>Hủy</button>
                        <button className={clx('round-btn', 'confirm')}>In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PrintingPage;