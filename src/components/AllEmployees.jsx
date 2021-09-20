import React from 'react';
import { Link } from 'react-router-dom';
import { EMPLOYEES } from '../db';
import { Filters } from './Filters';

export const AllEmployees = ({ initialState, setInitialState }) => {
  /**
   * name | city | role
   * filter of
   */

  const filteredEmployees = (employeesArr, initialState) => {
    let finalArr = [...employeesArr];

    if (initialState) {
      if (initialState?.filterCityStr !== '') {
        finalArr = finalArr.filter(
          (empObj) => empObj.city === initialState.filterCityStr
        );
      }

      if (initialState?.filterRoleStr !== '') {
        finalArr = finalArr.filter(
          (empObj) => empObj.role === initialState.filterRoleStr
        );
      }
    }
    console.log('applying filters');

    return finalArr;
  };

  return (
    <div>
      <Filters initialState={initialState} setInitialState={setInitialState} />
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>City</th>
        </tr>
        {initialState &&
          filteredEmployees(EMPLOYEES).length > 0 &&
          filteredEmployees(EMPLOYEES).map((empObj) => (
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
      </table>
    </div>
  );
};
