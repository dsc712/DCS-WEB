import React, { createContext, useState } from "react";

export const ActiveMenuContext = createContext();
const ActiveMenuContextProvider = props => {
  const [active, setActive] = useState(["Home"]);
  const setActiveMenu = (value) => {
    let a = [];
    a.push(value);
    setActive(a);
  };
  return (
    <ActiveMenuContext.Provider value={{ active, setActiveMenu }}>
      {props.children}
    </ActiveMenuContext.Provider>
  );
};

export default ActiveMenuContextProvider;