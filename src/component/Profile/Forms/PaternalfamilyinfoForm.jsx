import React from "react";
import style from "./Form.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

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
          <h4 className={style.headerTitle}>Paternal Family Details</h4>

          <div>
            <MdOutlineCancelPresentation
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
                <label htmlFor="grandFathersonOf">Son of</label>
                <input
                  type="text"
                  id="grandFathersonOf"
                  name="grandFathersonOf" // name added
                  className="form-control"
                  placeholder="Enter Occupation"
                  aria-label="Son of"
                  value={formData.grandFathersonOf}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="grandFatheroccupation">Occupation</label>
                <input
                  type="text"
                  id="grandFatheroccupation"
                  name="grandFatheroccupation" // name added
                  className="form-control"
                  placeholder="Enter Occupation"
                  aria-label="grandFatheroccupation"
                  value={formData.grandFatheroccupation} // value bound to state
                  onChange={handleInputChange} // onChange event to update state
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="grandFatherthikana">Thikana</label>
                <input
                  type="text"
                  id="grandFatherthikana"
                  name="grandFatherthikana"
                  className="form-control"
                  placeholder="Grand Father Thikana"
                  aria-label="grandFatherthikana"
                  value={formData.grandFatherthikana}
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
                  value={formData.grandMotherName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="grandMotherdaughterOf">Daughter of</label>
                <input
                  type="text"
                  id="grandMotherdaughterOf"
                  name="grandMotherdaughterOf"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Daughter of"
                  value={formData.grandMotherdaughterOf}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="grandmotherthikana">Thikana</label>
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

            <label className="mt-3">All BadePapa</label>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              {formData.badePapa?.map((item, index) => (
                <div key={index} className="row">
                  <div className="col-md-4">
                    <label htmlFor={`name-${index}`}>BadePapa</label>
                    <input
                      type="text"
                      id={`name-${index}`}
                      name="name"
                      className="form-control"
                      placeholder="Late Maharaj Maan Singh Ji Jhala"
                      aria-label="name"
                      value={item.name || ""}
                      onChange={(e) => handleInputChange(e, index, "badePapa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`marriedto-${index}`}>Married To</label>
                    <input
                      type="text"
                      id={`marriedto-${index}`}
                      name="marriedto"
                      className="form-control"
                      placeholder="Hans Kunwar"
                      aria-label="marriedto"
                      value={item.marriedto || ""}
                      onChange={(e) => handleInputChange(e, index, "badePapa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`daughterof-${index}`}>Daughter Of</label>
                    <input
                      type="text"
                      id={`daughterof-${index}`}
                      name="daughterof"
                      className="form-control"
                      placeholder="Mj. Thakur Chawand Singh"
                      aria-label="daughterof"
                      value={item.daughterof || ""}
                      onChange={(e) => handleInputChange(e, index, "badePapa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`thikana-${index}`}>Thikana</label>
                    <input
                      type="text"
                      id={`thikana-${index}`}
                      name="thikana"
                      className="form-control"
                      placeholder="Gyangarh, Mewar"
                      aria-label="thikana"
                      value={item.thikana || ""}
                      onChange={(e) => handleInputChange(e, index, "badePapa")}
                    />
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span
                    className="custom-add"
                    onClick={() => handleAddRow("badePapa")}
                    style={{ cursor: "pointer" }}
                  >
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <label>All Kakosa</label>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              {formData.kakosa?.map((item, index) => (
                <div key={index} className="row">
                  <div className="col-md-4">
                    <label htmlFor={`kakosa-name-${index}`}>Kakosa</label>
                    <input
                      type="text"
                      id={`kakosa-name-${index}`}
                      name="name"
                      className="form-control"
                      placeholder="Late Maharaj Maan Singh Ji Jhala"
                      aria-label="name"
                      value={item.name || ""}
                      onChange={(e) => handleInputChange(e, index, "kakosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`kakosa-marriedto-${index}`}>
                      Married To
                    </label>
                    <input
                      type="text"
                      id={`kakosa-marriedto-${index}`}
                      name="marriedto"
                      className="form-control"
                      placeholder="Hans Kunwar"
                      aria-label="marriedto"
                      value={item.marriedto || ""}
                      onChange={(e) => handleInputChange(e, index, "kakosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`kakosa-daughterof-${index}`}>
                      Daughter Of
                    </label>
                    <input
                      type="text"
                      id={`kakosa-daughterof-${index}`}
                      name="daughterof"
                      className="form-control"
                      placeholder="Mj. Thakur Chawand Singh"
                      aria-label="daughterof"
                      value={item.daughterof || ""}
                      onChange={(e) => handleInputChange(e, index, "kakosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`kakosa-thikana-${index}`}>Thikana</label>
                    <input
                      type="text"
                      id={`kakosa-thikana-${index}`}
                      name="thikana"
                      className="form-control"
                      placeholder="Gyangarh, Mewar"
                      aria-label="thikana"
                      value={item.thikana || ""}
                      onChange={(e) => handleInputChange(e, index, "kakosa")}
                    />
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span
                    className="custom-add"
                    onClick={() => handleAddRow("kakosa")}
                    style={{ cursor: "pointer" }}
                  >
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
                <label
                  htmlFor="maternalGrandFathersonOf"
                  className="form-label"
                >
                  Son of
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandFathersonOf"
                  name="maternalGrandFathersonOf"
                  placeholder="Enter Name"
                  value={formData.maternalGrandFathersonOf || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="maternalGrandFatheroccupation"
                  className="form-label"
                >
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandFatheroccupation"
                  name="maternalGrandFatheroccupation"
                  placeholder="maternalGrandFatheroccupation"
                  value={formData.maternalGrandFatheroccupation || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="maternalGrandFatherthikana"
                  className="form-label"
                >
                  Thikana
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandFatherthikana"
                  name="maternalGrandFatherthikana"
                  placeholder="Enter Thikana"
                  value={formData.maternalGrandFatherthikana || ""}
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
                <label
                  htmlFor="maternalGrandMotherdaughterOf"
                  className="form-label"
                >
                  Daughter of
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maternalGrandMotherdaughterOf"
                  name="maternalGrandMotherdaughterOf"
                  placeholder="Enter Name"
                  value={formData.maternalGrandMotherdaughterOf || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="maternalGrandMotherthikana"
                  className="form-label"
                >
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

            <label>All Mamosa</label>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              {formData.mamosa?.map((item, index) => (
                <div key={index} className="row">
                  <div className="col-md-4">
                    <label htmlFor={`mamosa-name-${index}`}>Mamosa</label>
                    <input
                      type="text"
                      id={`mamosa-name-${index}`}
                      name="name"
                      className="form-control"
                      placeholder="Late Maharaj Maan Singh Ji Jhala"
                      aria-label="name"
                      value={item.name || ""}
                      onChange={(e) => handleInputChange(e, index, "mamosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`mamosa-marriedto-${index}`}>
                      Married To
                    </label>
                    <input
                      type="text"
                      id={`mamosa-marriedto-${index}`}
                      name="marriedto"
                      className="form-control"
                      placeholder="Hans Kunwar"
                      aria-label="marriedto"
                      value={item.marriedto || ""}
                      onChange={(e) => handleInputChange(e, index, "mamosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`mamosa-daughterof-${index}`}>
                      Daughter Of
                    </label>
                    <input
                      type="text"
                      id={`mamosa-daughterof-${index}`}
                      name="daughterof"
                      className="form-control"
                      placeholder="Mj. Thakur"
                      aria-label="daughterof"
                      value={item.daughterof || ""}
                      onChange={(e) => handleInputChange(e, index, "mamosa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`mamosa-thikana-${index}`}>Thikana</label>
                    <input
                      type="text"
                      id={`mamosa-thikana-${index}`}
                      name="thikana"
                      className="form-control"
                      placeholder="City"
                      aria-label="thikana"
                      value={item.thikana || ""}
                      onChange={(e) => handleInputChange(e, index, "mamosa")}
                    />
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span
                    className="custom-add"
                    onClick={() => handleAddRow("mamosa")}
                    style={{ cursor: "pointer" }}
                  >
                    + ADD
                  </span>
                </div>
              </div>
            </div>

            <label>All Masisa</label>
            <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
              {formData.masisa.map((item, index) => (
                <div key={index} className="row">
                  <div className="col-md-4">
                    <label htmlFor={`masisa-name-${index}`}>Masisa</label>
                    <input
                      type="text"
                      id={`masisa-name-${index}`}
                      name="name"
                      className="form-control"
                      placeholder="Lt Maharaj"
                      aria-label="name"
                      value={item.name || ""}
                      onChange={(e) => handleInputChange(e, index, "masisa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`masisa-marriedto-${index}`}>
                      Married To
                    </label>
                    <input
                      type="text"
                      id={`masisa-marriedto-${index}`}
                      name="marriedto"
                      className="form-control"
                      placeholder="Hans Kunwar"
                      aria-label="marriedto"
                      value={item.marriedto || ""}
                      onChange={(e) => handleInputChange(e, index, "masisa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`masisa-daughterof-${index}`}>
                      Daughter Of
                    </label>
                    <input
                      type="text"
                      id={`masisa-daughterof-${index}`}
                      name="daughterof"
                      className="form-control"
                      placeholder="Mj. Thakur Chawand Singh"
                      aria-label="daughterof"
                      value={item.daughterof || ""}
                      onChange={(e) => handleInputChange(e, index, "masisa")}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`masisa-thikana-${index}`}>Thikana</label>
                    <input
                      type="text"
                      id={`masisa-thikana-${index}`}
                      name="thikana"
                      className="form-control"
                      placeholder="Gyangarh, Mewar"
                      aria-label="thikana"
                      value={item.thikana || ""}
                      onChange={(e) => handleInputChange(e, index, "masisa")}
                    />
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-12 text-end text-danger">
                  <span
                    className="custom-add"
                    onClick={() => handleAddRow("masisa")}
                    style={{ cursor: "pointer" }}
                  >
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

// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import style from "./Form.module.css";

// function PaternalFamilyInfoForm({
//   handleCancelClick,
//   handleAddRow,
//   handleInputChange,
//   formData,
//   handleSaveClick,
// }) {
//   return (
//     <div className={style.modalContainer}>
//       <div className={style.modalContent}>
//         <div className={style.modalHeader}>
//           <h1>Paternal Family Details</h1>
//           <div>
//             <AiOutlineClose
//               onClick={handleCancelClick}
//               className={style.closeIcon}
//             />
//           </div>
//         </div>

//         <form className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             {/* BadePapa Section */}
//             <div className="sub-title mt-4">All BadePapa</div>
//             <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
//               <div className="row">
//                 <div className="col-md-4">
//                   <label htmlFor="name">BadePapa</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="badePapa.name"
//                     className="form-control"
//                     placeholder="Late Maharaj Maan Singh Ji Jhala"
//                     aria-label="name"
//                     value={formData.badePapa?.name || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="marriedto">Married To</label>
//                   <input
//                     type="text"
//                     id="marriedto"
//                     name="badePapa.marriedto"
//                     className="form-control"
//                     placeholder="Hans Kunwar"
//                     aria-label="marriedto"
//                     value={formData.badePapa?.marriedto || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="daughterof">Daughter Of</label>
//                   <input
//                     type="text"
//                     id="daughterof"
//                     name="badePapa.daughterof"
//                     className="form-control"
//                     placeholder="Mj. Thakur Chawand Singh"
//                     aria-label="daughterof"
//                     value={formData.badePapa?.daughterof || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="Thikana">Thikana</label>
//                   <input
//                     type="text"
//                     id="Thikana"
//                     name="badePapa.Thikana"
//                     className="form-control"
//                     placeholder="Gyangarh, Mewar"
//                     aria-label="Thikana"
//                     value={formData.badePapa?.Thikana || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12 text-end text-danger">
//                   <span
//                     className="custom-add"
//                     onClick={() => handleAddRow("badePapa")}
//                   >
//                     + ADD
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* BadeChacha Section */}
//             <div className="sub-title mt-4">All Kakosa</div>
//             <div className="mt-2 p-3" style={{ backgroundColor: "wheat" }}>
//               <div className="row">
//                 <div className="col-md-4">
//                   <label htmlFor="name">kakosa</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="badeChacha.name"
//                     className="form-control"
//                     placeholder="Late Maharaj Maan Singh Ji Jhala"
//                     aria-label="name"
//                     value={formData.badeChacha?.name || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="marriedto">Married To</label>
//                   <input
//                     type="text"
//                     id="marriedto"
//                     name="badeChacha.marriedto"
//                     className="form-control"
//                     placeholder="Hans Kunwar"
//                     aria-label="marriedto"
//                     value={formData.badeChacha?.marriedto || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="daughterof">Daughter Of</label>
//                   <input
//                     type="text"
//                     id="daughterof"
//                     name="badeChacha.daughterof"
//                     className="form-control"
//                     placeholder="Mj. Thakur Chawand Singh"
//                     aria-label="daughterof"
//                     value={formData.badeChacha?.daughterof || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label htmlFor="Thikana">Thikana</label>
//                   <input
//                     type="text"
//                     id="Thikana"
//                     name="badeChacha.Thikana"
//                     className="form-control"
//                     placeholder="Gyangarh, Mewar"
//                     aria-label="Thikana"
//                     value={formData.badeChacha?.Thikana || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12 text-end text-danger">
//                   <span
//                     className="custom-add"
//                     onClick={() => handleAddRow("badeChacha")}
//                   >
//                     + ADD
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={style.modalFooter}>
//             <button
//               type="button"
//               className={`btn btn-primary ${style.saveButton}`}
//               onClick={handleSaveClick}
//             >
//               SAVE
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PaternalFamilyInfoForm;
