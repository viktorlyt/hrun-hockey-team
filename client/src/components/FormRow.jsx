const FormRow = ({
  type,
  name,
  isLabeled,
  labelIcon,
  labelText,
  defaultValue,
  value,
  isPlaceholder = true,
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
    inputProps.placeholder = name.capitalizeFirstLetter();
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
