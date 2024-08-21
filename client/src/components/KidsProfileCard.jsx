import { useState } from "react";
import FormRow from "./FormRow";

const KidsProfileCard = ({ onAddKid }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [kidData, setKidData] = useState({ name: "", dob: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKidData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddKid(kidData);
    setKidData({ name: "", dob: "" });
    setIsAdding(false);
  };

  return (
    <>
      {isAdding && (
        <form
          onSubmit={handleSubmit}
          className="profile-card info-card child-form"
        >
          <div className="info">
            <h4>Child name and last name</h4>
            <FormRow
              type="text"
              name="name"
              labelText="First and last name"
              value={kidData.name}
              onChange={handleChange}
              placeholder="Type name"
            />
            <h4 className="child-dob">Date of birth</h4>
            <FormRow
              type="date"
              name="dob"
              labelText="Date of birth"
              value={kidData.dob}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="actions">
            <div class="form-row-inline">
              <button type="submit" className="text-button">
                <span className="b1 edit">Save</span>
              </button>
              <button
                type="button"
                className="text-button"
                onClick={() => setIsAdding(false)}
              >
                <span className="b1 cancel">Cancel</span>
              </button>
            </div>
          </div>
        </form>
      )}

      <div
        className={`info-card add-kids ${isAdding ? "disabled" : ""}`}
        onClick={!isAdding ? () => setIsAdding(true) : null}
      >
        <h4>+ Add kids to your account</h4>
      </div>
    </>
  );
};

export default KidsProfileCard;
