// src/TeamContext.js
import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamName] = useState("Castors");
  const [address] = useState("Moncton, NB, Canada");
  const [phone] = useState("+1 506 567 6777");
  const [email] = useState("castors@gmail.com");

  return (
    <TeamContext.Provider value={{ teamName, address, phone, email }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  return useContext(TeamContext);
};
