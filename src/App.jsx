import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Manager } from './components/Manager';
import { EMPLOYEES } from './db';
import { AllEmployees } from './components/AllEmployees';
/**
 * part 1:
 * 1. render table of employees
 * 2 two filters city and role
 *
 *
 * part 2:
 *    manager details page
 */

function App() {
  const [initialState, setInitialState] = useState({
    filterCityStr: '',
    filterRoleStr: '',
  });
  const [empArr, setEmpArr] = useState(EMPLOYEES);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <div
        style={{ display: 'flex', alignItems: 'center', margin: '1rem auto' }}>
        <Link to="/">All Employees</Link>
      </div>
      <div>
        {initialState.filterCityStr === ''
          ? 'no city filtered'
          : initialState.filterCityStr}
      </div>
      <div>
        {initialState.filterRoleStr === ''
          ? 'no role filtered'
          : initialState.filterRoleStr}
      </div>
      {initialState && (
        <Routes>
          <Route
            path="/"
            element={
              <AllEmployees
                initialState={initialState}
                setInitialState={setInitialState}
                empArr={empArr}
                setEmpArr={setEmpArr}
              />
            }
          />
          <Route
            path="/manager/:id"
            element={
              <Manager
                initialState={initialState}
                setInitialState={setInitialState}
                empArr={empArr}
                setEmpArr={setEmpArr}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
