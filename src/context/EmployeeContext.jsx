import React, { createContext, useContext, useState } from 'react';

const EmpContext = createContext();

export const EmployeeProvider = ({ childern }) => {
  const [filterObj, setFilterObj] = useState({
    filterCity: false,
    filterRole: false,
  });

  return <EmpContext.Provider value={{}}>{childern}</EmpContext.Provider>;
};
