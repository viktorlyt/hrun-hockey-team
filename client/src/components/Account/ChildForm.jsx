import React from "react";
import FormRow from "../FormRow";

const ChildForm = ({ child, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedChild = {
      ...child,
      [name.includes("Name") ? "name" : "dob"]: value,
    };

    onChange(updatedChild);
  };

  return (
    <div className="child-form">
      <FormRow
        type="text"
        name={child.id ? `childName${child.id}` : "newChildName"}
        placeholder="Type name"
        value={child.name || ""}
        onChange={handleChange}
      />
      <h4 className="child-dob">Date of birth:</h4>
      <FormRow
        type="date"
        name={child.id ? `childDob${child.id}` : "newChildDob"}
        placeholder="yyyy-mm-dd"
        value={child.dob || ""}
        onChange={handleChange}
        min={
          new Date(new Date().setFullYear(new Date().getFullYear() - 18))
            .toISOString()
            .split("T")[0]
        }
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
};

export default ChildForm;
