import React, { useState } from "react";
import style from "./Mydetails.module.css";
import PaternalfamilyinfoForm from "../Forms/PaternalfamilyinfoForm";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";
import { useEffect } from "react";

function PaternalSideDetails() {
  const { fetchUserData, updateData } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [view, setView] = useState(false);
<<<<<<< HEAD
=======
  const [error, setError] = useState("");
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b

  const keyNameMapping = {
    grandFatherName: "Grandfather Name",
    grandFathersonOf: "Son of",
    grandFatheroccupation: "Occupation",
    grandFatherthikana: "Native Place",
    grandMotherName: "GrandMother Name",
    grandMotherdaughterOf: "Daughter of",
    grandmotherthikana: "Native Place",
    maternalGrandFatherName: "Maternal Grandfather",
    maternalGrandFathersonOf: "Son of",
    maternalGrandFatheroccupation: "Occupation",
    maternalGrandFatherthikana: "Native Place",
    maternalGrandMotherName: "Maternal Grandmother",
    maternalGrandMotherdaughterOf: "Daughter of",
    maternalGrandMotherthikana: "Native Place",
  };

  const excludedKeys = ["badePapa", "kakosa", "mamosa", "masisa", "bhuasa"];

  const [details, setDetails] = useState({
    grandFatherName: "",
    grandFathersonOf: "",
    grandFatheroccupation: "",
    grandFatherthikana: "",
    grandMotherName: "",
    grandMotherdaughterOf: "",
    grandmotherthikana: "",
    badePapa: [{ name: "", marriedto: "", daughterof: "", thikana: "" }],
    kakosa: [{ name: "", marriedto: "", daughterof: "", thikana: "" }],
    bhuasa: [{ name: "", marriedto: "", sonof: "", thikana: "" }],
    maternalGrandFatherName: "",
    maternalGrandFatherthikana: "",
    maternalGrandFathersonOf: "",
    maternalGrandFatheroccupation: "",
    maternalGrandMotherName: "",
    maternalGrandMotherdaughterOf: "",
    maternalGrandMotherthikana: "",
    mamosa: [{ name: "", marriedto: "", daughterof: "", thikana: "" }],
    masisa: [{ name: "", marriedto: "", sonof: "", thikana: "" }],
  });
  const [formData, setFormData] = useState(details);

  const handletoggle = () => setView(!view);

  const fetchData = async () => {
    try {
      const route = "getpaternal-details";
      const userData = await fetchUserData(route);
      const { createdAt, updatedAt, _id, userId, ...filteredUserData } =
        userData;
      console.log("Existing details:", details);
      console.log("Filtered user data:", filteredUserData);
      const mergedDetails = { ...details, ...filteredUserData };
      console.log("Merged details:", mergedDetails);
      setDetails(mergedDetails);
      setFormData(mergedDetails);
      console.log("vbhvchjvchj", details);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSaveClick = async () => {
<<<<<<< HEAD
=======
    // Check if all fields in the nested arrays are filled (except index 0)
    for (const arrayName of [
      "badePapa",
      "kakosa",
      "bhuasa",
      "mamosa",
      "masisa",
    ]) {
      if (formData[arrayName]) {
        for (let index = 0; index < formData[arrayName].length; index++) {
          const item = formData[arrayName][index];

          // Skip validation for index 0
          if (index === 0) continue;

          for (const key in item) {
            if (!item[key]?.trim()) {
              setError(
                `Please fill all fields in ${arrayName}, row ${index + 1}`
              );
              return;
            }
          }
        }
      }
    }

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
    try {
      const route = "updatepaternal-details";
      await updateData(route, formData);
      setIsEditing(false);
      await fetchData(); // Refresh data after saving
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleInputChange = (e, index, arrayName) => {
    const { name, value } = e.target;

    const nameRegex = /^[a-zA-Z\s]{0,25}$/;
    const placeRegex = /^[a-zA-Z\s,.'-]{0,25}$/;

    if (!nameRegex.test(value) && !placeRegex.test(value)) return;

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
      ...(arrayName === "masisa" && "bhuasa"
        ? { sonof: "" }
        : { daughterof: "" }),
      thikana: "",
    };
    setFormData({ ...formData, [arrayName]: [...formData[arrayName], newRow] });
  };

<<<<<<< HEAD
  const removeRow = (arrayName) => {
    if (formData[arrayName].length === 0) return;
    const updatedArray = formData[arrayName].slice(0, -1);
=======
  const handleRemoveRow = (index, arrayName) => {
    if (formData[arrayName].length === 1) return;
    const updatedArray = formData[arrayName].filter((_, i) => i !== index);
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  useEffect(() => {
    fetchData();
  }, [isEditing]);

  return (
    <div className={style.appContainer}>
      <div className={style.detailsHeader}>
        <h4 className={style.headerTitle}>Paternal Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={style.editBtn}>
            <FaRegEdit size="18" />
          </div>
        ) : (
          <div>
            <PaternalfamilyinfoForm
              handleCancelClick={handleCancelClick}
              handleAddRow={handleAddRow}
<<<<<<< HEAD
              handleInputChange={handleInputChange}
              formData={formData}
              handleSaveClick={handleSaveClick}
=======
              handleRemoveRow={handleRemoveRow}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSaveClick={handleSaveClick}
              error={error}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
            />
          </div>
        )}
      </div>
      {/* <div className={style.details}>
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
                  <div className={`${style.label}`}>
                    {key
                      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                      .replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className={`${style.value}`}>
                    {details[key] && typeof details[key] === "object"
                      ? JSON.stringify(details[key], null, 2) // Format objects as strings
                      : details[key] || "N/A"}
                  </div>
                </div>
              ))}

            <div className="">
              {!view && (
                <div className="text-danger fw-bold" onClick={handletoggle}>
                  View more
                </div>
              )}
              {view && (
                <>
                  <BadePapaHukum details={details} />
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
      </div> */}

      {/* <div className={style.details}>
  {Object.entries(details).length > 0 ? (
    <>
      {Object.keys(details)
        .filter((key) => !Array.isArray(details[key]) && !excludedKeys.includes(key))
        .slice(0, 7)
        .map((key) => (
          <div className={style.detailItem} key={key}>
            <div className={`${style.label}`}>
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </div>
            <div className={`${style.value}`}>
              {details[key] && typeof details[key] === "object"
                ? JSON.stringify(details[key], null, 2)
                : details[key] || "N/A"}
            </div>
          </div>
        ))}

      <div>
        {!view ? (
          <div className="text-danger fw-bold" onClick={handletoggle}>
            View more
          </div>
        ) : (
          <>
            <BadePapaHukum details={details} />
            <KakosaHukum details={details} />

            {Object.keys(details)
              .filter((key) => !Array.isArray(details[key]) && !excludedKeys.includes(key))
              .slice(7, 14)
              .map((key) => (
                <div className={style.detailItem} key={key}>
                  <div className={`${style.label}`}>
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className={`${style.value}`}>
                    {details[key] && typeof details[key] === "object"
                      ? JSON.stringify(details[key], null, 2)
                      : details[key] || "N/A"}
                  </div>
                </div>
              ))}

            <div className="tables-section">
              <MamosaHukum details={details} />
              <MasisaHukum details={details} />
            </div>

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
</div> */}
      <div className={style.details}>
        {Object.entries(details).length > 0 ? (
          <>
            {/* Show first 7 keys */}
            {Object.keys(details)
              .filter(
                (key) =>
                  !Array.isArray(details[key]) && !excludedKeys.includes(key)
              )
              .slice(0, 7)
              .map((key) => (
                <div className={style.detailItem} key={key}>
                  <div className={`${style.label}`}>
                    {keyNameMapping[key] || key} {/* Use mapped key name */}
                  </div>
                  <div className={`${style.value}`}>
                    {details[key] && typeof details[key] === "object"
                      ? JSON.stringify(details[key], null, 2)
                      : details[key] || "N/A"}
                  </div>
                </div>
              ))}

            <div>
              {!view ? (
<<<<<<< HEAD
                <div className="text-danger fw-bold" onClick={handletoggle}>
=======
                <div
                  className="text-danger fw-bold text-decoration-underline mb-4 mt-4"
                  onClick={handletoggle}
                >
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                  View more
                </div>
              ) : (
                <>
                  <BadePapaHukum details={details} />
                  <KakosaHukum details={details} />
                  <BhuasaHukum details={details} />

                  {/* Show the next 7 keys */}
                  {Object.keys(details)
                    .filter(
                      (key) =>
                        !Array.isArray(details[key]) &&
                        !excludedKeys.includes(key)
                    )
                    .slice(7, 14)
                    .map((key) => (
                      <div className={style.detailItem} key={key}>
                        <div className={`${style.label}`}>
                          {keyNameMapping[key] || key}{" "}
                          {/* Use mapped key name */}
                        </div>
                        <div className={`${style.value}`}>
                          {details[key] && typeof details[key] === "object"
                            ? JSON.stringify(details[key], null, 2)
                            : details[key] || "N/A"}
                        </div>
                      </div>
                    ))}

                  {/* Display tables */}
                  <div className="tables-section">
                    <MamosaHukum details={details} />
                    <MasisaHukum details={details} />
                  </div>

<<<<<<< HEAD
                  <div className="text-danger fw-bold" onClick={handletoggle}>
=======
                  <div
                    className="text-danger fw-bold text-decoration-underline mb-4 mt-4"
                    onClick={handletoggle}
                  >
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
  const renderValue = (value) => (value ? value : "Not available");

  return (
    <div className="mt-4">
      <div className={style.textsmValue}>Badepapa Hukum</div>
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
            {details.badePapa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{renderValue(item.name)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.marriedto)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.daughterof)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.thikana)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KakosaHukum({ details }) {
  const renderValue = (value) => (value ? value : "Not available");

  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textsmValue}`}>Kakosa Hukum</div>
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
            {details.kakosa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{renderValue(item.name)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.marriedto)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.daughterof)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.thikana)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BhuasaHukum({ details }) {
  const renderValue = (value) => (value ? value : "Not available");

  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textsmValue}`}>Bhuasa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>Son of</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{renderValue(item.name)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.marriedto)}
                </td>
                <td className={style.textsmValue}>{renderValue(item.sonof)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.thikana)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MamosaHukum({ details }) {
  const renderValue = (value) => (value ? value : "Not available");

  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textsmValue}`}>Mamosa Hukum</div>
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
            {details.mamosa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{renderValue(item.name)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.marriedto)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.daughterof)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.thikana)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MasisaHukum({ details }) {
  const renderValue = (value) => (value ? value : "Not available");

  return (
    <div className="mt-4">
      <div className={`mb-2 ${style.textsmValue}`}>Masisa Hukum</div>
      <div className="table-responsive w-100 mx-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className={`${style.textSm} text-secondary`}>Name</th>
              <th className={`${style.textXs} text-secondary`}>Married to</th>
              <th className={`${style.textXs} text-secondary`}>Son of</th>
              <th className={`${style.textXs} text-secondary`}>Thikana</th>
            </tr>
          </thead>
          <tbody>
            {details.masisa.map((item, index) => (
              <tr key={index} className={style.textSm}>
                <td className={style.textsmValue}>{renderValue(item.name)}</td>
                <td className={style.textsmValue}>
                  {renderValue(item.marriedto)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.daughterof)}
                </td>
                <td className={style.textsmValue}>
                  {renderValue(item.thikana)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaternalSideDetails;
