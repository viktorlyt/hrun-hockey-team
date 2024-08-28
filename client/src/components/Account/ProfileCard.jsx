import React, { useState, useEffect } from "react";
import FormRow from "../FormRow";
import AddressForm from "./AddressForm";
import ChildForm from "./ChildForm";
import { formatDate } from "../../utils/functions";

const ProfileCard = ({
  title,
  value,
  isEmptyValue = false,
  handleEditSubmit,
  inputType = "text",
  name,
  showCard = true,
}) => {
  const [isEditing, setIsEditing] = useState(name === "kids" ? {} : false);
  const [isFormDataValid, setIsFormDataValid] = useState(false);
  const [editedValue, setEditedValue] = useState(name === "kids" ? {} : value);

  useEffect(() => {
    if ((name === "address" && isAddressEmpty(value)) || name === "addChild") {
      setIsEditing(true);
    }
  }, [name, value]);

  const isAddressEmpty = (address) => {
    return (
      address.streetAddress.length < 5 ||
      address.city.length < 3 ||
      !address.province
      //|| !address.postalCode
    );
  };

  const calculateAge = (date) => {
    const today = new Date();
    const dob = new Date(date);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate()))
      age--;

    return age;
  };

  const validateFormData = (newValue) => {
    console.log("inside validateFormData");
    console.log("newValue", newValue);
    console.log("newValueName", newValue.name);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    const isValid =
      (name === "address" && !isAddressEmpty(newValue)) ||
      (name === "addChild" &&
        newValue.newChildName.length >= 4 &&
        newValue.newChildDob &&
        calculateAge(newValue.newChildDob) < 18) ||
      (name === "kids" &&
        newValue.name.length >= 4 &&
        newValue.id &&
        calculateAge(newValue.dob) < 18) ||
      (name === "name" && newValue.length >= 4) ||
      (name === "dob" && calculateAge(newValue) >= 18) ||
      (name === "email" && emailRegex.test(newValue)) ||
      (name === "phoneNumber" &&
        phoneRegex.test(
          newValue
            .replace(/\s/g, "")
            .replace(/-/g, "")
            .replace(/\(/g, "")
            .replace(/\)/g, "")
        ));

    setIsFormDataValid(isValid);
    return isValid;
  };

  const handleEdit = (childId = null) => {
    if (name === "kids") {
      setIsEditing((prev) => ({
        ...prev,
        [childId]: !prev[childId],
      }));

      if (!isEditing[childId]) {
        const childToEdit = value.find((kid) => kid.id === childId);
        setEditedValue((prev) => ({
          ...prev,
          [childId]: childToEdit,
        }));
      } else {
        if (validateFormData(editedValue[childId])) {
          const updatedKids = value.map((kid) =>
            kid.id === childId ? editedValue[childId] : kid
          );
          handleEditSubmit(name, updatedKids);
        }
      }
    } else {
      if (isEditing) {
        if (validateFormData(editedValue)) {
          handleEditSubmit(name, editedValue);
          if (name === "addChild") {
            setEditedValue({ newChildName: "", newChildDob: "" });
          }
        } else {
          setEditedValue(value);
        }
      }
      setIsEditing(!isEditing);
      validateFormData(editedValue);
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditedValue(newValue);
    validateFormData(newValue);
  };

  const handleFormChange = (newFormData, childId = null) => {
    if (name === "kids") {
      setEditedValue((prev) => ({
        ...prev,
        [childId]: newFormData,
      }));
      validateFormData(newFormData);
    } else {
      setEditedValue(newFormData);
      validateFormData(newFormData);
    }
  };

  const renderEditContent = (kid = null) => {
    if (name === "address") {
      return <AddressForm address={editedValue} onChange={handleFormChange} />;
    }

    if (name === "kids" && kid) {
      return (
        <ChildForm
          // child={kid}
          child={editedValue[kid.id] || kid}
          onChange={(data) => handleFormChange(data, kid.id)}
        />
      );
    }

    if (name === "addChild") {
      return <ChildForm child={editedValue} onChange={handleFormChange} />;
    }

    return (
      <FormRow
        type={inputType}
        name={name}
        value={editedValue}
        onChange={handleChange}
        isLabeled={false}
        //TODO minus day doesnt work, bug in valudating day
        max={formatDate(
          new Date(
            new Date().setFullYear(new Date().getFullYear() - 18) - 86400000
          )
        )}
        // max={formatDate(
        //   new Date(
        //     new Date(new Date() - 86400000).setFullYear(
        //       new Date().getFullYear() - 18
        //     )
        //   )
        // )}
      />
    );
  };

  const renderViewContent = (kid = null) => {
    if (name === "address") {
      if (isAddressEmpty(editedValue)) {
        return <span className="b1 value empty">No address provided</span>;
      }
      return (
        <span className="b1 value">
          {editedValue.streetAddress},{" "}
          {editedValue.apt && `${editedValue.apt}, `}
          {editedValue.city}, {editedValue.province},{" "}
          {editedValue.postalCode && `${editedValue.postalCode}, `}
          {editedValue.country}
        </span>
      );
    }

    if (name === "kids" && kid) {
      return (
        <div>
          <span className="b1 value">{kid.name}</span>
          <h4 className="child-dob">Date of birth:</h4>
          <span className="b1 value">{formatDate(new Date(kid.dob))}</span>
        </div>
      );
    }

    // TODO Remove when back-end implemented
    if (typeof value === "object" && value !== null) {
      return <span className="b1 value">{JSON.stringify(value)}</span>;
    }

    return (
      <span
        className={`b1 value ${isEmptyValue ? "empty" : ""} ${
          value === "yyyy-mm-dd" ? "placeholder" : ""
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <>
      {/* Render all cards except "kids" */}
      {name !== "kids" && (
        <form
          className={`profile-card info-card ${!showCard ? "hide" : ""}`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="info">
            <h4>{title}</h4>
            {isEditing || (name === "address" && isAddressEmpty(editedValue))
              ? renderEditContent()
              : renderViewContent()}
          </div>
          <div className="actions">
            <button
              type="button"
              className="text-button"
              onClick={handleEdit}
              disabled={isEditing && !isFormDataValid}
            >
              <span className="b1 edit">{isEditing ? "Save" : "Edit"}</span>
            </button>
          </div>
        </form>
      )}

      {/* Render "kids" cards if the kids array is not empty */}
      {name === "kids" &&
        value.map((kid) => (
          <form
            key={`child ${kid.id}`}
            className={`profile-card info-card ${!showCard ? "hide" : ""}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <input hidden value={kid.id} name="childId" id="childId" readOnly />
            <div className="info">
              <h4>{title}</h4>
              {isEditing[kid.id]
                ? renderEditContent(kid)
                : renderViewContent(kid)}
            </div>
            <div className="actions">
              <button
                type="button"
                className="text-button"
                onClick={() => handleEdit(kid.id)}
                disabled={
                  // isEditing[kid.id] && !validateFormData(editedValue[kid.id])
                  isEditing[kid.id] && !isFormDataValid
                }
              >
                <span className="b1 edit">
                  {isEditing[kid.id] ? "Save" : "Edit"}
                </span>
              </button>
            </div>
          </form>
        ))}
    </>
  );
};
export default ProfileCard;

// <span className="b1 edit">
//   {isEditing
//     ? isFormDataValid
//       ? "Save"
//       : name === "addChild" || (name === "address" && isAddressEmpty)
//       ? "Save"
//       : "Cancel"
//     : "Edit"}
// </span>;

// TODO Remove when back-end implemented
// if (typeof value === "object" && value !== null) {
//   return <span className="b1 value">{JSON.stringify(value)}</span>;
// }
