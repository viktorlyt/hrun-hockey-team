import React, { useState, useEffect } from "react";
import FormRow from "./FormRow";
import AddressForm from "./AddressForm";
import ChildForm from "./ChildForm";

const ProfileCard = ({
  title,
  value,
  isEmptyValue = false,
  handleEditSubmit,
  inputType = "text",
  name,
  showCard = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isFormDataValid, setIsFormDataValid] = useState(false);
  // const [editedValue, setEditedValue] = useState(value);
  const [editedValue, setEditedValue] = useState(() => {
    if (name === "address") {
      return (
        value || {
          streetAddress: "",
          city: "",
          province: "",
          postalCode: "",
          country: "",
        }
      );
    } else if (name === "addChild" || name === "kids") {
      return value || { name: "", dob: "" };
    } else {
      return value;
    }
  });

  useEffect(() => {
    if ((name === "address" && isAddressEmpty(value)) || name === "addChild") {
      setIsEditing(true);
    }
  }, [name, value]);

  const isAddressEmpty = (address) => {
    return (
      !address.streetAddress.length > 4 ||
      !address.city.length > 2 ||
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

    // console.log("date", date);
    // console.log("dob", dob);
    // console.log("age", age);

    return age;
  };

  // const validateFormData = () => {
  //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  //   const isValid =
  //     (name === "address" && !isAddressEmpty(editedValue)) ||
  //     ((name === "addChild" || name === "kids") &&
  //       editedValue.name &&
  //       editedValue.dob &&
  //       editedValue.dob.length > 0 &&
  //       calculateAge(editedValue.dob) < 18) ||
  //     (name === "dob" && calculateAge(editedValue) >= 18) ||
  //     (name === "email" && emailRegex.test(editedValue)) ||
  //     (name === "phoneNumber" &&
  //       phoneRegex.test(
  //         editedValue
  //           .replace(/\s/g, "")
  //           .replace(/-/g, "")
  //           .replace(/\(/g, "")
  //           .replace(/\)/g, "")
  //       ));

  //   console.log("name", name);
  //   console.log("editedValue", editedValue);
  //   // console.log("dob", calculateAge(editedValue));

  //   setIsFormDataValid(isValid);
  //   return isValid;
  // };

  const validateFormData = (newValue) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    const isValid =
      (name === "address" && !isAddressEmpty(newValue)) ||
      ((name === "addChild" || name === "kids") &&
        newValue.name &&
        newValue.dob &&
        newValue.dob.length > 0 &&
        calculateAge(newValue.dob) < 18) ||
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

    console.log("name", name);
    console.log("editedValue", newValue);

    setIsFormDataValid(isValid);
    return isValid;
  };

  useEffect(() => {
    console.log("handleChange, editedValue after:", editedValue, ":");
  }, [editedValue]);

  // const handleEdit = () => {
  //   if (isEditing) {
  //     if (validateFormData()) {
  //       handleEditSubmit(name, editedValue);
  //       setIsEditing(!isEditing);
  //     }
  //   }
  //   setIsEditing(!isEditing);
  // };

  const handleEdit = () => {
    if (isEditing) {
      if (validateFormData(editedValue)) {
        handleEditSubmit(name, editedValue);
        setIsEditing(!isEditing);
      }
    }
    validateFormData(editedValue);
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    console.log("handleChange, editedValue before:", editedValue, ":");
    const newValue = e.target.value;
    console.log("handleChange, newValue:", newValue, ":");
    setEditedValue(newValue);
    // validateFormData();
    validateFormData(newValue);
    console.log("handleChange, editedValue after:", editedValue, ":");
  };

  const handleFormChange = (newFormData) => {
    setEditedValue(newFormData);
  };

  const renderEditContent = () => {
    if (name === "address") {
      return <AddressForm address={editedValue} onChange={handleFormChange} />;
    }

    if (name === "addChild" || name === "kids") {
      return <ChildForm child={editedValue} onChange={handleFormChange} />;
    }

    return (
      <FormRow
        type={inputType}
        name={name}
        value={editedValue}
        onChange={handleChange}
        isLabeled={false}
        max={
          new Date(
            new Date().setFullYear(new Date().getFullYear() - 18) - 86400000
          )
            .toISOString()
            .split("T")[0]
        }
      />
    );
  };

  const renderViewContent = () => {
    if (name === "address") {
      if (isAddressEmpty(editedValue)) {
        return <span className="b1 value empty">No address provided</span>;
      }
      return (
        <span className="b1 value">
          {editedValue.streetAddress},{" "}
          {editedValue.apt && `${editedValue.apt}, `}
          {editedValue.city}, {editedValue.province}, {editedValue.postalCode},{" "}
          {editedValue.country}
        </span>
      );
    }

    if (name === "kids" && value.length > 0) {
      return editedValue.map((kid) => (
        <>
          <span className="b1 value">{kid.name}</span>
          <h4 className="child-dob">Date of birth:</h4>
          <span className="b1 value">{kid.dob}</span>
        </>
      ));
    } else if (name === "kids" && value.length === 0) {
      showCard = false;
      return null;
    }

    return (
      <span className={`b1 value ${isEmptyValue ? "empty" : ""}`}>{value}</span>
    );
  };

  return (
    <form
      className={`profile-card info-card ${
        !showCard || (name === "kids" && value.length === 0) ? "hide" : ""
      }`}
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
          <span className="b1 edit">
            {isEditing
              ? isFormDataValid
                ? "Save"
                : name === "addChild" || (name === "address" && isAddressEmpty)
                ? "Save"
                : "Cancel"
              : "Edit"}
          </span>
        </button>
      </div>
    </form>
  );
};
export default ProfileCard;
