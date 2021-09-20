import React, { createContext, useContext, useState } from 'react';

const empContext = createContext();

const EmployeeProvider = ({ childern }) => {
  const [filterObj, setFilterObj] = useState({
    filterCity: false,
    filterRole: false,
  });

  return (
    <empContext.Provider value={{ filterObj, setFilterObj }}>
      {childern}
    </empContext.Provider>
  );
};

export { EmployeeProvider };
