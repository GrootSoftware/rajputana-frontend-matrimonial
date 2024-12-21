
import React from "react";
import style from "./Form.module.css";
import { AiOutlineClose } from "react-icons/ai";

function PaternalfamilyinfoForm({
  handleCancelClick,
  handleAddRow,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h1>Paternal Family Details</h1>
          <div>
            <AiOutlineClose
              onClick={handleCancelClick}
              className={style.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="grandFatherName">Grand Father Name</label>
                <input
                  type="text"
                  id="grandFatherName"
                  name="grandFatherName"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Grand Father Name"
                  value={formData.grandFatherName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="sonOf">Son of</label>
                <input
                  type="text"
                  id="sonOf"
                  name="sonOf" // name added
                  className="form-control"
                  placeholder="Enter Occupation"
                  aria-label="Son of"
                  value={formData.sonOf}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation" // name added
                  className="form-control"
                  placeholder="Enter Occupation"
                  aria-label="Occupation"
                  value={formData.occupation} // value bound to state
                  onChange={handleInputChange} // onChange event to update state
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="thikana">Thikana</label>
                <input
                  type="text"
                  id="maternalGrandFatherthikana"
                  name="maternalGrandFatherthikana"
                  className="form-control"
                  placeholder="Maternal Grand Father Thikana"
                  aria-label="maternalGrandFatherthikana"
                  value={formData.maternalGrandFatherthikana}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="grandMotherName">Grand Mother Name</label>
                <input
                  type="text"
                  id="grandMotherName"
                  name="grandMotherName"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Grand Mother Name"
                  value={formData.grandMotherName} // value bound to state
                  onChange={handleInputChange} // onChange event to update state
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="daughterOf">Daughter of</label>
                <input
                  type="text"
                  id="daughterOf"
                  name="daughterOf"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Daughter of"
                  value={formData.daughterOf}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="thikana2">Thikana</label>
                <input
                  type="text"
                  id="grandmotherthikana"
                  name="grandmotherthikana"
                  className="form-control"
                  placeholder="grand Mother Thikana"
                  aria-label="Thikana"
                  value={formData.grandmotherthikana}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="sub-title mt-4">All BadePapa</div>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="name">BadePapa</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Late Maharaj Maan Singh Ji Jhala"
                    aria-label="name"
                    value={formData.badePapa.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="badePapa2">marriedto</label>
                  <input
                    type="text"
                    id="marriedto"
                    name="marriedto" // name added
                    className="form-control"
                    placeholder="Hans Kunwar"
                    aria-label="marriedto"
                    value={formData.badePapa.marriedto} // value bound to state
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="badePapa3">daughterof</label>
                  <input
                    type="text"
                    id="daughterof"
                    name="daughterof" // name added
                    className="form-control"
                    placeholder="Mj. Thakur Chawand Singh"
                    aria-label="daughterof"
                    value={formData.badePapa.daughterof}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="badePapa4">Thikana</label>
                  <input
                    type="text"
                    id="Thikana"
                    name="Thikana"
                    className="form-control"
                    placeholder="Gyangarh, Mewar"
                    aria-label="Thikana"
                    value={formData.badePapa.Thikana}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span
                    className="custom-add"
                    onClick={handleAddRow("badePapa")}
                  >
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <div className="sub-title mt-4">All Kakosa Hukum</div>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              <div className="row mb-2">
                <div className="col-12">
                  <input
                    type="text"
                    className="custom-input"
                    name="name"
                    id="name"
                    value={formData.kakosa.name || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4">
                  <input
                    type="text"
                    className="custom-input"
                    id="marriedto"
                    name="marriedto"
                    value={formData.kakosa.marriedto || ""}
                    readOnly
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="custom-input"
                    id="daughterof"
                    name="daughterof"
                    value={formData.kakosa.daughterof || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="custom-input"
                    id="Thikana"
                    name="Thikana"
                    value={formData.kakosa.Thikana || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span className="custom-add" onClick={handleAddRow("kakosa")}>
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="maternalGrandFatherName" className="form-label">
                  Maternal Grand Father Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandFatherName"
                  name="maternalGrandFatherName"
                  placeholder="Name"
                  value={formData.maternalGrandFatherName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="sonOf" className="form-label">
                  Son of
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sonOf"
                  name="sonOf"
                  placeholder="Enter Name"
                  value={formData.sonOf || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="occupation"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="thikana" className="form-label">
                  Thikana
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="thikana"
                  name="thikana"
                  placeholder="Enter Thikana"
                  value={formData.thikana || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="maternalGrandMotherName" className="form-label">
                  Maternal Grand Mother Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandMotherName"
                  name="maternalGrandMotherName"
                  placeholder="Enter Name"
                  value={formData.maternalGrandMotherName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="daughterOf" className="form-label">
                  Daughter of
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="daughterOf"
                  name="daughterOf"
                  placeholder="Enter Name"
                  value={formData.daughterOf || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="thikana2" className="form-label">
                  Thikana
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandMotherthikana"
                  name="maternalGrandMotherthikana"
                  placeholder="Maternal Grand Mother Thikana"
                  value={formData.maternalGrandMotherthikana || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="sub-title mt-4">All Mamosa</div>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="name">Mamosa</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Late Maharaj Maan Singh Ji Jhala"
                    aria-label="name"
                    value={formData.mamosa.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mamosa">marriedto</label>
                  <input
                    type="text"
                    id="marriedto"
                    name="marriedto" // name added
                    className="form-control"
                    placeholder="Hans Kunwar"
                    aria-label="marriedto"
                    value={formData.mamosa.marriedto} // value bound to state
                    onChange={handleInputChange} // onChange event to update state
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mamosa">daughterof</label>
                  <input
                    type="text"
                    id="daughterof"
                    name="daughterof" // name added
                    className="form-control"
                    placeholder="Mj. Thakur Chawand Singh"
                    aria-label="daughterof"
                    value={formData.mamosa.daughterof}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mamosa">Thikana</label>
                  <input
                    type="text"
                    id="Thikana"
                    name="Thikana"
                    className="form-control"
                    placeholder="Gyangarh, Mewar"
                    aria-label="Thikana"
                    value={formData.mamosa.Thikana}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span className="custom-add" onClick={handleAddRow("mamosa")}>
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <div className="sub-title mt-4">All Masisa</div>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="name">Masisa</label>
                  <input
                    type="text"
                    id="name"
                    name="Masisa" // name added
                    className="form-control"
                    placeholder="Late Maharaj Maan Singh Ji Jhala"
                    aria-label="name"
                    value={formData.masisa.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mamosa">marriedto</label>
                  <input
                    type="text"
                    id="marriedto"
                    name="marriedto" // name added
                    className="form-control"
                    placeholder="Hans Kunwar"
                    aria-label="marriedto"
                    value={formData.masisa.marriedto} // value bound to state
                    onChange={handleInputChange} // onChange event to update state
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="badePapa3">daughterof</label>
                  <input
                    type="text"
                    id="daughterof"
                    name="daughterof" // name added
                    className="form-control"
                    placeholder="Mj. Thakur Chawand Singh"
                    aria-label="daughterof"
                    value={formData.masisa.daughterof}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="badePapa4">Thikana</label>
                  <input
                    type="text"
                    id="Thikana"
                    name="Thikana"
                    className="form-control"
                    placeholder="Gyangarh, Mewar"
                    aria-label="Thikana"
                    value={formData.masisa.Thikana}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span className="custom-add" onClick={handleAddRow("masisa")}>
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <div className={style.modalFooter}>
              <button
                type="button"
                className={`btn btn-primary ${style.saveButton}`}
                onClick={handleSaveClick}
              >
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaternalfamilyinfoForm;
