const FormRow = ({
  type,
  name,
  isLabeled,
  labelIcon,
  labelText,
  defaultValue,
  isPlaceholder = true,
  isRequired = true,
}) => {
  const renderLabel = () => {
    if (type === "checkbox" && labelText.includes("collected and stored")) {
      const parts = labelText.split("collected and stored");
      return (
        <>
          {parts[0]}
          <u className="underlined-text">collected and stored</u>
          {parts[1]}
        </>
      );
    }
    return labelText;
  };

  return (
    <div className={`form-row ${type}`}>
      {isLabeled && type !== "checkbox" && (
        <label htmlFor={name} className="form-label">
          {labelIcon || null}
          {labelText || name}
        </label>
      )}
      <div className={`form-input-container ${type}`}>
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            className="form-input"
            placeholder={isPlaceholder ? name.capitalizeFirstLetter() : ""}
            defaultValue={defaultValue || ""}
            required
          />
        ) : (
          <input
            type={type}
            {...(type === "checkbox" ? { checked: defaultValue || false } : {})}
            id={name}
            name={name}
            className="form-input"
            placeholder={isPlaceholder ? name.capitalizeFirstLetter() : ""}
            defaultValue={defaultValue || ""}
            required
          />
        )}
        {isLabeled && type === "checkbox" && (
          <label htmlFor={name} className="form-label checkbox-lbl">
            {labelIcon || null}
            {renderLabel()}
          </label>
        )}
      </div>
    </div>
  );
};
export default FormRow;
