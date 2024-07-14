// src/TeamContext.js
import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamName] = useState("Castors");
  // const [address] = useState("45 Grand St,\nMoncton, NB, Canada");
  const [address] = useState("Moncton, NB, Canada");
  const [phone] = useState("506 456 4556");
  const [email] = useState("castorteam@gmail.com");

  return (
    <TeamContext.Provider value={{ teamName, address, phone, email }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  return useContext(TeamContext);
};
