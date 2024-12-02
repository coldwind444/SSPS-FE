import React, { useState } from "react";
import "./PrinterManagementPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PrinterManagementPage() {
  const [printers, setPrinters] = useState([
    {
      id: "001",
      name: "HP Laserjet Pro",
      location: "Tầng 1 - H6 - 101",
      status: "on",
    },
    {
      id: "002",
      name: "Canon Pixma TS",
      location: "Tầng 1 - H6 - 101",
      status: "on",
    },
    {
      id: "003",
      name: "Epson Workforce 7120",
      location: "Tầng 1 - H6 - 101",
      status: "off",
    },
    {
      id: "004",
      name: "Canon Pixma TS",
      location: "Tầng 1 - H6 - 101",
      status: "off",
    },
    {
      id: "005",
      name: "Canon Pixma TS",
      location: "Tầng 1 - H6 - 101",
      status: "on",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPrinter, setCurrentPrinter] = useState(null);
  const [newPrinter, setNewPrinter] = useState({ name: "", location: "" });

  const toggleStatus = (id) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === id
          ? { ...printer, status: printer.status === "on" ? "off" : "on" }
          : printer
      )
    );
  };

  const handleAddPrinter = () => {
    if (!newPrinter.name || !newPrinter.location) return; // Prevent adding if fields are empty
    const newId = (printers.length + 1).toString().padStart(3, "0");
    setPrinters([...printers, { id: newId, ...newPrinter, status: "off" }]);
    setNewPrinter({ name: "", location: "" });
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (printer) => {
    setCurrentPrinter({ ...printer });
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === currentPrinter.id ? currentPrinter : printer
      )
    );
    setIsEditModalOpen(false);
    setCurrentPrinter(null);
  };

  return (
    <div className="printer-management">
      <header className="header">
        <h1>Quản lý máy in</h1>
      </header>
      <div className="wrapper">
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
        </div>
        <button
          className="add-printer-button"
          onClick={() => setIsAddModalOpen(true)}>
          Thêm máy in +
        </button>
      </div>
      <table className="printer-table">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Loại</th>
            <th>Vị trí</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {printers.map((printer) => (
            <tr key={printer.id}>
              <td>{printer.id}</td>
              <td>{printer.name}</td>
              <td>{printer.location}</td>
              <td>
                <span className={`status ${printer.status}`}>
                  {printer.status === "on" ? "Bật" : "Tắt"}
                </span>
              </td>
              <td>
                <div className="btn-container">
                  <button
                    className={`toggle-button ${printer.status === 'on' ? 'off' : 'on'}`}
                    onClick={() => toggleStatus(printer.id)}>
                    {printer.status === "on" ? "Vô hiệu hóa" : "Kích hoạt"}
                  </button>
                  <button
                    className="update-button"
                    onClick={() => handleOpenEditModal(printer)}>
                    Cập nhật
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="footer">
        <span>Hiển thị {printers.length}/180 dòng</span>
        <div className="pagination">
          <button className="prev-button"><FontAwesomeIcon icon={faArrowLeft}/>Trước </button>
          <button className="next-button">Sau <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
      </footer>

      {/* Add Printer Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Thêm máy in</h2>
              <button
                className="close-button"
                onClick={() => setIsAddModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <form className="printer-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPrinter();
              }}
            >
              <div className="form-group">
                <label htmlFor="newPrinterName">Tên máy in</label>
                <input
                  id="newPrinterName"
                  type="text"
                  value={newPrinter.name}
                  onChange={(e) =>
                    setNewPrinter({ ...newPrinter, name: e.target.value })
                  }
                  placeholder="Nhập tên máy in"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPrinterLocation">Vị trí</label>
                <input
                  id="newPrinterLocation"
                  type="text"
                  value={newPrinter.location}
                  onChange={(e) =>
                    setNewPrinter({ ...newPrinter, location: e.target.value })
                  }
                  placeholder="Nhập vị trí"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="add-button">
                  Thêm
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Printer Modal */}
      {isEditModalOpen && currentPrinter && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Cập nhật máy in</h2>
              <button
                className="close-button"
                onClick={() => setIsEditModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveChanges();
              }}
            >
              <div className="form-group">
                <label htmlFor="printerName">Tên Máy In</label>
                <input
                  id="printerName"
                  type="text"
                  value={currentPrinter.name}
                  onChange={(e) =>
                    setCurrentPrinter({
                      ...currentPrinter,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="printerLocation">Vị Trí</label>
                <input
                  id="printerLocation"
                  type="text"
                  value={currentPrinter.location}
                  onChange={(e) =>
                    setCurrentPrinter({
                      ...currentPrinter,
                      location: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="save-button">
                  Lưu
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterManagementPage;
