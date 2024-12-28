import React, { useState } from "react";
import style from "../BasicDetails/Mydetails.module.css";
import PaternalfamilyinfoForm from "../Forms/PaternalfamilyinfoForm";
import { FaRegEdit } from "react-icons/fa";

function PaternalSideDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const [view, setView] = useState(false);

  const [details, setDetails] = useState({
    grandFatherName: "",
    sonOf: "",
    occupation: "",
    thikana: "",
    grandMotherName: "",
    daughterOf: "",
    grandmotherthikana: "",
    maternalGrandFatherthikana: "",
    sonOf: "",
    occupation: "",
    thikana: "",
    maternalGrandMotherName: "",
    daughterOf: "",
    maternalGrandMotherthikana: "",
    badePapa: [
      {
        name: "Gaurav",
        marriedto: "hhhhhhh",
        daughterof: "hhh",
        thikana: "Kotya",
      },
    ],
    kakosa: [
      {
        name: "Gaurav",
        marriedto: "hhhhhhh",
        daughterof: "hhh",
        thikana: "Kotya",
      },
    ],
    mamosa: [
      {
        name: "Gaurav",
        marriedto: "hhhhhhh",
        daughterof: "hhh",
        thikana: "Kotya",
      },
    ],
    masisa: [
      {
        name: "Gaurav",
        marriedto: "hhhhhhh",
        daughterof: "hhh",
        thikana: "Kotya",
      },
    ],
  });
  const [formData, setFormData] = useState(details);
  const handletoggle = () => {
    setView(!view);
  };

  const handleInputChange = (e, index, arrayName) => {
    const { name, value } = e.target;
    if (arrayName) {
      const updatedArray = [...formData[arrayName]];
      updatedArray[index] = { ...updatedArray[index], [name]: value };
      setFormData({ ...formData, [arrayName]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddRow = (arrayName) => {
    const newRow = {
      name: "",
      marriedto: "",
      daughterof: "",
      thikana: "",
    };
    setFormData({ ...formData, [arrayName]: [...formData[arrayName], newRow] });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  const handleSaveClick = () => {
    setDetails(formData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className={style.appContainer}>
      <div className={style.detailsHeader}>
        <h4 className={style.headerTitle}>Paternal Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={style.editBtn}>
            <FaRegEdit />
            Edit
          </div>
        ) : (
          <div>
            <PaternalfamilyinfoForm
              handleCancelClick={handleCancelClick}
              handleAddRow={handleAddRow}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSaveClick={handleSaveClick}
            />
          </div>
        )}
      </div>

      <div className={style.details}>
        {Object.entries(details).length > 0 ? (
          <>
            {Object.keys(details)
              .filter(
                (key) =>
                  !Array.isArray(details[key]) && // Exclude array values
                  !["badePapa", "kakosa", "mamosa", "masisa"].includes(key) // Exclude specific keys
              )
              .map((key) => (
                <div className={style.detailItem} key={key}>
                  <div className={style.label}>
                    {key
                      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </div>
                  <div className={style.value}>
                    {details[key] && typeof details[key] === "object"
                      ? JSON.stringify(details[key], null, 2) // Format objects as strings
                      : details[key] || "N/A"}
                  </div>
                </div>
              ))}
            <div className="">
              <BadePapaHukum details={details} />
              {!view && (
                <div className="text-danger fw-bold" onClick={handletoggle}>
                  View more
                </div>
              )}
              {view && (
                <>
                  {" "}
                  <KakosaHukum details={details} />
                  <MamosaHukum details={details} />
                  <MasisaHukum details={details} />
                  <div className="text-danger fw-bold" onClick={handletoggle}>
                    View less
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

function BadePapaHukum({ details }) {
  return (
    <div className="mt-4">
      <div className={style.textSm}>Badepapa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>D/O</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{item.name}</td>
                <td className={style.textsmValue}>{item.marriedto}</td>
                <td className={style.textsmValue}>{item.daughterof}</td>
                <td className={style.textsmValue}>{item.thikana}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KakosaHukum({ details }) {
  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textSm}`}>Kakosa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>D/O</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{item.name}</td>
                <td className={style.textsmValue}>{item.marriedto}</td>
                <td className={style.textsmValue}>{item.daughterof}</td>
                <td className={style.textsmValue}>{item.thikana}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MamosaHukum({ details, handleInputChange, handleAddRow }) {
  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textSm}`}>Mamosa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>D/O</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{item.name}</td>
                <td className={style.textsmValue}>{item.marriedto}</td>
                <td className={style.textsmValue}>{item.daughterof}</td>
                <td className={style.textsmValue}>{item.thikana}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MasisaHukum({ details }) {
  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textSm}`}>Masisa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>D/O</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{item.name}</td>
                <td className={style.textsmValue}>{item.marriedto}</td>
                <td className={style.textsmValue}>{item.daughterof}</td>
                <td className={style.textsmValue}>{item.thikana}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaternalSideDetails;
