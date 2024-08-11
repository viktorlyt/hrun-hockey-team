import React from "react";

const FormRow = ({
  type,
  name,
  isLabeled,
  labelIcon,
  labelText,
  defaultValue,
  value,
  isPlaceholder = true,
  placeholder = "",
  isRequired = true,
  onChange,
}) => {
  const renderLabel = () => {
    if (type === "checkbox" && labelText.includes("collected and stored")) {
      const parts = labelText.split("collected and stored");
      return (
        <>
          <span className="label-part-0">{parts[0]}</span>
          <span className="label-part-1">
            <u className="underlined-text">collected and stored</u>
            {parts[1]}
          </span>
        </>
      );
    }
    return labelText;
  };

  const inputProps = {
    id: name,
    name: name,
    className: "form-input",
    required: isRequired,
  };

  if (onChange) {
    inputProps.onChange = onChange;
    if (type === "checkbox") {
      inputProps.checked = value;
    } else {
      inputProps.value = value;
    }
  } else {
    if (type === "checkbox") {
      inputProps.defaultChecked = defaultValue;
    } else {
      inputProps.defaultValue = defaultValue || "";
    }
  }

  if (isPlaceholder && type !== "checkbox") {
    if (React.isValidElement(placeholder)) {
      // If placeholder is a React element, wrap it in a span
      inputProps.placeholder = " "; // Set an empty space as placeholder
      inputProps["data-placeholder"] = true; // Add a data attribute to style the placeholder
    } else {
      inputProps.placeholder =
        placeholder === "" ? name.capitalizeFirstLetter() : placeholder;
    }
  }

  return (
    <div className={`form-row ${type}`}>
      {isLabeled && type !== "checkbox" && (
        <label htmlFor={name} className="form-label b1">
          {labelIcon || null}
          {labelText || name}
        </label>
      )}
      <div className={`form-input-container ${type}`}>
        {type === "textarea" ? (
          <textarea className="b3" {...inputProps} />
        ) : React.isValidElement(placeholder) ? (
          <div className="input-wrapper">
            <input className="b3" type={type} {...inputProps} />
            {React.isValidElement(placeholder) &&
              inputProps["data-placeholder"] && (
                <span className="placeholder-content">{placeholder}</span>
              )}
          </div>
        ) : (
          <input className="b3" type={type} {...inputProps} />
        )}
        {isLabeled && type === "checkbox" && (
          <label htmlFor={name} className="form-label checkbox-lbl b3">
            {labelIcon || null}
            {renderLabel()}
          </label>
        )}
      </div>
    </div>
  );
};

export default FormRow;
