import React from "react";
import "./Popup.css";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Giao dịch thành công!</h2>
        <p>Số tiền đã được trừ và giao dịch hoàn tất.</p>
        <button onClick={onClose} className="btn-close">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
