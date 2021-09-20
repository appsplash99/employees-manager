import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <Router>
        <App />
      </Router>
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
