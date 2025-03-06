import React from 'react';
import './Logbook.css';

const EmployeeLog = () => {
  const logs = [
    { name: 'Jaylen Horne', date: 'Feb 21, 2022', hours: 10 },
    { name: 'Byron Tang', date: 'Feb 22, 2022', hours: 5 },
    { name: 'Phebe Mosley', date: 'Feb 21, 2022', hours: 7 },
    { name: 'Riley Roy', date: 'Feb 22, 2022', hours: 4 },
    { name: 'Byron Tang', date: 'Feb 23, 2022', hours: 3 },
  ];

  return (
    <div className="employee-log">
      <h1>Log Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date </th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.name}</td>
              <td>{log.date}</td>
              <td>{log.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeLog;