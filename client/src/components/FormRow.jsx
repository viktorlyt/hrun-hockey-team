import React from "react";

const FormRow = ({
  type,
  name,
  isLabeled,
  labelIcon,
  labelText,
  defaultValue,
  value,
  options = [],
  isPlaceholder = true,
  placeholder = "",
  isRequired = true,
  onChange,
  min,
  max,
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
    // className: "form-input",
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
      inputProps.placeholder = " ";
      inputProps["data-placeholder"] = true;
    } else {
      inputProps.placeholder =
        placeholder === "" ? name.capitalizeFirstLetter() : placeholder;
    }
  }

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea className="form-input b3" {...inputProps} />;
      case "select":
        return (
          <div className="select-wrapper">
            <select className="form-input b5 capitalize-first" {...inputProps}>
              <option className="b5 capitalize-first" value="" disabled hidden>
                {placeholder || `Select ${name}`}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="select-label b5 capitalize-first">
              {labelText || name}
            </span>
          </div>
        );
      default:
        if (React.isValidElement(placeholder)) {
          return (
            <div className="input-wrapper">
              <input
                type={type}
                {...inputProps}
                className="form-input b3"
                min={min}
                max={max}
              />
              {React.isValidElement(placeholder) &&
                inputProps["data-placeholder"] && (
                  <span className="b3 placeholder-content">{placeholder}</span>
                )}
            </div>
          );
        } else {
          return (
            <input
              className="form-input b3"
              type={type}
              {...inputProps}
              min={min}
              max={max}
            />
          );
        }
    }
  };

  return (
    <div className={`form-row ${type}`}>
      {isLabeled && type !== "checkbox" && type !== "select" && (
        <label htmlFor={name} className="form-label b1">
          {labelIcon || null}
          {labelText || name}
        </label>
      )}
      <div className={`form-input-container ${type}`}>
        {renderInput()}
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
