import React from "react";
import "./Form.css";

import { AiOutlineClose } from "react-icons/ai";

function FormCard({ handleCancelClick, details, handleInputChange, formData ,handleSaveClick}) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Basic Details</h1>
          <div>
            <AiOutlineClose onClick={handleCancelClick} style={{ scale: "1.5" }} />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              {Object.keys(details).map((key) => (
                <div className="form-item" key={key}>
                  <div className="label">
                    {key
                      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </div>
                  <div className="value">
                    <input
                      type="text"
                      name={key}
                      value={formData[key] || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button type="" onClick={handleSaveClick}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;
