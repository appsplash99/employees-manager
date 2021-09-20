import React from 'react';

export const Filters = ({
  initialState,
  setInitialState,
  setEmpArr,
  empArr,
}) => {
  const { filterCityStr, filterRoleStr } = initialState;

  const filteredEmployees = (employeesArr, initialState) => {
    let finalArr = [...employeesArr];

    const { filterCityStr, filterRoleStr } = initialState;

    const cityFilter = filterCityStr !== '';
    const roleFilter = filterRoleStr !== '';

    if (cityFilter) {
      finalArr = finalArr.filter((empObj) =>
        empObj.city.includes(filterCityStr)
      );
    }

    if (roleFilter) {
      finalArr = finalArr.filter((empObj) =>
        empObj.role.includes(filterRoleStr)
      );
    }

    return finalArr;
  };

  const handleRoleChange = (e) => {
    setInitialState((prev) => ({ ...prev, filterRoleStr: e.target.value }));
    setEmpArr(filteredEmployees(empArr, initialState));
  };

  const handleCityChange = (e) => {
    setInitialState((prev) => ({ ...prev, filterCityStr: e.target.value }));
    setEmpArr(filteredEmployees(empArr, initialState));
  };

  return (
    <div>
      <div>
        <label>
          City
          <input
            type="text"
            value={filterCityStr}
            onChange={(e) => handleCityChange(e)}
          />
        </label>
      </div>
      <div>
        <label>
          Role
          <input
            type="text"
            value={filterRoleStr}
            onChange={(e) => handleRoleChange(e)}
          />
        </label>
      </div>
    </div>
  );
};
