import React, { useState } from 'react';
import './Logbook.css';

const EmployeeLog = () => {
  const [logs, setLogs] = useState([
    { name: 'Jaylen Horne', date: 'Feb 21, 2022', hours: 10, checkedOut: false },
    { name: 'Byron Tang', date: 'Feb 22, 2022', hours: 5, checkedOut: false },
    { name: 'Phebe Mosley', date: 'Feb 21, 2022', hours: 7, checkedOut: false },
    { name: 'Riley Roy', date: 'Feb 22, 2022', hours: 4, checkedOut: false },
    { name: 'Byron Tang', date: 'Feb 23, 2022', hours: 3, checkedOut: false },
  ]);

  const handleCheckOut = (index) => {
    const updatedLogs = logs.map((log, i) =>
      i === index ? { ...log, checkedOut: true } : log
    );
    setLogs(updatedLogs);
  };

  return (
    <div className="employee-log">
      <h1>Log Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.name}</td>
              <td>{log.date}</td>
              <td>{log.hours}</td>
              <td>
                {log.checkedOut ? (
                  <span className="checked">✅</span>
                ) : (
                  <button className="out-btn" onClick={() => handleCheckOut(index)}>Out</button>
                )}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeLog;