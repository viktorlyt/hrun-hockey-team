import React, { useState } from "react";
import { useAccountContext } from "./AccountLayout";
import ProfileCard from "../../components/Account/ProfileCard";
import Wrapper from "../../assets/wrappers/Account/Profile";
import { formatDate } from "../../utils/functions";

const Profile = () => {
  const { user, updateUser } = useAccountContext();
  const [showChildForm, setShowChildForm] = useState(false);
  const [isAddingChild, setIsAddingChild] = useState(false);
  const [kids, setKids] = useState(user.kids);
  const [newChild, setNewChild] = useState({
    newChildName: "",
    newChildDob: "",
  });

  const [profileData, setProfileData] = useState({
    name: `${user.firstName} ${user.lastName}`,
    dob: user.dob ? formatDate(user.dob) : "yyyy-mm-dd",
    email: user.email,
    phone: user.phone,
    address: user.address || {
      country: "Canada",
      streetAddress: "",
      apt: "",
      city: "",
      province: "New Brunswick",
      postalCode: "",
    },
    kids: user.kids || [],
  });

  // TODO check editing dates (change year for the first kid)
  const handleEditSubmit = (name, value) => {
    if (name === "addChild") {
      const newKid = {
        id:
          profileData.kids.length > 0
            ? Math.max(...profileData.kids.map((kid) => kid.id)) + 1
            : 1,
        name: value.newChildName,
        dob: value.newChildDob,
      };

      setProfileData((prevData) => ({
        ...prevData,
        kids: [...prevData.kids, newKid],
      }));

      setNewChild({ newChildName: "", newChildDob: "" });
      setShowChildForm(false);
      setIsAddingChild(false);
    } else if (name === "kids") {
      setProfileData((prevData) => ({
        ...prevData,
        kids: value,
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    // TODO: user update
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
      name: "phone",
      value: profileData.phone,
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
          // value={ps.value}
          value={ps.name === "addChild" ? newChild : ps.value}
          isEmptyValue={
            ps.name === "address" ? !ps.value.streetAddress : !ps.value
          }
          handleEditSubmit={handleEditSubmit}
          inputType={ps.inputType}
          showCard={ps.showCard}
        />
      ))}
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
