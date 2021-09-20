import React from 'react';
import { useParams } from 'react-router';
import { EMPLOYEES } from '../db';

export const Manager = ({ empArr }) => {
  const { id: currManagerID } = useParams();

  const currManager = empArr?.find(
    (empObj) => empObj.id === Number(currManagerID)
  );

  const managersWorkers =
    currManager &&
    empArr.filter((empObj) => empObj.reports_to === currManager?.id);

  return (
    <div>
      <div>Manager: {currManager?.name}</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>City</th>
        </tr>

        <tbody>
          {currManager &&
            managersWorkers.length > 0 &&
            managersWorkers.map((empObj) => (
              <tr key={empObj.id}>
                <td>{empObj.name}</td>
                <td>{empObj.role}</td>
                <td>{empObj.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
