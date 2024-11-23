import React from "react";
import "./Popup.css";

const FailurePopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Giao dịch thất bại!</h2>
        <p>Vui lòng kiểm tra lại thông tin hoặc nạp thêm tiền.</p>
        <button onClick={onClose} className="btn-close">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default FailurePopup;
