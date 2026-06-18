import React, { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const student = { name: "Ebuka", path: "Web Development" };
  const teacher = { name: "Samuel", path: "Backend" };
  return (
    <UserContext.Provider value={{ student, teacher }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
