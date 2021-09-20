import React from 'react';

export const Filters = ({ initialState, setInitialState }) => {
  const { filterCityStr, filterRoleStr } = initialState;

  const handleRoleChange = (e) => {
    setInitialState((prev) => ({ ...prev, filterRoleStr: e.target.value }));
  };

  const handleCityChange = (e) => {
    setInitialState((prev) => ({ ...prev, filterCityStr: e.target.value }));
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
