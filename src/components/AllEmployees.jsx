import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { EMPLOYEES } from '../db';
import { Filters } from './Filters';

export const AllEmployees = ({
  initialState,
  setInitialState,
  empArr,
  setEmpArr,
}) => {
  /**
   * name | city | role
   * filter of
   */
  console.log({ initialState });

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

  return (
    <div>
      <Filters
        initialState={initialState}
        setInitialState={setInitialState}
        setEmpArr={setEmpArr}
        empArr={empArr}
      />
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>City</th>
        </tr>
        <tbody>
          {/* {filteredEmployees(EMPLOYEES, initialState)?.length > 0 &&
            filteredEmployees(EMPLOYEES, initialState)?.map((empObj) => ( */}
          {empArr.map((empObj) => (
            <tr key={empObj.id}>
              <td>
                {empObj.role === 'manager' ? (
                  <Link to={`/manager/${empObj.id}`}>{empObj.name}</Link>
                ) : (
                  <>{empObj.name}</>
                )}
              </td>
              <td>{empObj.role}</td>
              <td>{empObj.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
