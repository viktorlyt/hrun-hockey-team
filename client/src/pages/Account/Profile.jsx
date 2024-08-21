import React, { useState } from "react";
import { useAccountContext } from "./AccountLayout";
import ProfileCard from "../../components/ProfileCard";
// import KidsProfileCard from "../../components/KidsProfileCard";
import Wrapper from "../../assets/wrappers/Profile";

const Profile = () => {
  const { user, updateUser } = useAccountContext();
  const [showChildForm, setShowChildForm] = useState(false);
  const [isAddingChild, setIsAddingChild] = useState(false);
  const [profileData, setProfileData] = useState({
    name: `${user.firstName} ${user.lastName}`,
    dob: user.dob
      ? new Date(user.dob).toLocaleDateString("en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      : "",
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address || {
      country: "Canada",
      streetAddress: "",
      apt: "",
      city: "",
      province: "",
      postalCode: "",
    },
    kids: user.kids || [],
  });

  const handleEditSubmit = (name, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // TODO user update
    // updateUser({ [name]: value });
  };

  const showAddChildForm = () => {
    setShowChildForm(true);
    setIsAddingChild(true);
  };

  const profileSections = [
    { title: "First and last name:", name: "name", value: profileData.name },
    {
      title: "Date of birth:",
      name: "dob",
      value: profileData.dob,
      inputType: "date",
    },
    {
      title: "Email:",
      name: "email",
      value: profileData.email,
      inputType: "email",
    },
    {
      title: "Phone number:",
      name: "phoneNumber",
      value: profileData.phoneNumber,
      inputType: "tel",
    },
    { title: "Address:", name: "address", value: profileData.address },
    {
      title: "Child name and last name:",
      name: "kids",
      value: profileData.kids,
    },
    {
      title: "Child name and last name:",
      name: "addChild",
      value: profileData.kids,
      showCard: showChildForm,
    },
  ];

  return (
    <Wrapper>
      {profileSections.map((ps) => (
        <ProfileCard
          key={ps.name}
          title={ps.title}
          name={ps.name}
          value={ps.value}
          isEmptyValue={
            ps.name === "address" ? !ps.value.streetAddress : !ps.value
          }
          handleEditSubmit={handleEditSubmit}
          inputType={ps.inputType}
          showCard={ps.showCard}
        />
      ))}
      {/* <KidsProfileCard onAddKid={showAddChildForm} /> */}
      <div
        className={`info-card add-kids ${isAddingChild ? "disabled" : ""}`}
        onClick={!isAddingChild ? showAddChildForm : null}
      >
        <h4>+ Add kids to your account</h4>
      </div>
    </Wrapper>
  );
};

export default Profile;
