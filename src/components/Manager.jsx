import React from 'react';
import { useParams } from 'react-router';
import { EMPLOYEES } from '../db';

export const Manager = () => {
  const { id: currManagerID } = useParams();

  const currManager = EMPLOYEES?.find(
    (empObj) => empObj.id === Number(currManagerID)
  );

  const managersWorkers =
    currManager &&
    EMPLOYEES.filter((empObj) => empObj.reports_to === currManager?.id);

  return (
    <div>
      <div>Manager: {currManager?.name}</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>City</th>
        </tr>

        {currManager &&
          managersWorkers.length > 0 &&
          managersWorkers.map((empObj) => (
            <tr key={empObj.id}>
              <td>{empObj.name}</td>
              <td>{empObj.role}</td>
              <td>{empObj.city}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
