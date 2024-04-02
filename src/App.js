import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const EmployeeForm = ({ onSubmit }) => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    nrc: '',
    dob: '',
    rank: '',
    department: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    // Reset form after submission
    setEmployee({
      id: '',
      name: '',
      nrc: '',
      dob: '',
      rank: '',
      department: '',
      phone: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={employee.id} onChange={handleChange} placeholder="Employee ID" required />
        <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="nrc" value={employee.nrc} onChange={handleChange} placeholder="NRC" required />
        <input type="date" name="dob" value={employee.dob} onChange={handleChange} required />
        <select name="rank" value={employee.rank} onChange={handleChange} required>
          <option value="">Select Rank</option>
          <option value="Junior">Junior</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Senior">Senior</option>
        </select>
        <select name="department" value={employee.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
        <div className="phone-email-container">
          <div className="input-container">
            <input type="tel" name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" required />
          </div>
          <div className="input-container">
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
          </div>
        </div>
        <textarea name="address" value={employee.address} onChange={handleChange} placeholder="Address" required ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


// Employee List Component
const EmployeeList = ({ employees }) => {
  const [filter, setFilter] = useState({ id: '', name: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredEmployees = employees.filter(employee => {
    return (
      employee.id.toString().includes(filter.id) &&
      employee.name.toLowerCase().includes(filter.name.toLowerCase())
    );
  });

  return (
    <div className="list-container">
      <h2>Employee List</h2>
      <div className="filter-container">
        <input
          type="text"
          name="id"
          value={filter.id}
          onChange={handleFilterChange}
          placeholder="Filter by ID"
          className="filter-input"
        />
        <input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
          placeholder="Filter by Name"
          className="filter-input"
        />
      </div>
      <ul>
        {filteredEmployees.map((employee, index) => (
          <li key={index}>
            {employee.id} - {employee.name} - {employee.phone} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Leave Form Component
const LeaveForm = ({ employees, onSubmit }) => {
  const [leave, setLeave] = useState({
    employeeName: '',
    leaveType: '',
    fromDate: '',
    toDate: '',
    remark: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeave({ ...leave, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee leave:', leave); // Log employee leave data
    console.log('onSubmit function:', onSubmit); // Log onSubmit function
    onSubmit(leave);
    // Reset form after submission
    setLeave({
      employeeName: '',
      leaveType: '',
      fromDate: '',
      toDate: '',
      remark: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Leave Form</h2>
      <form onSubmit={handleSubmit}>
        <select name="employeeName" value={leave.employeeName} onChange={handleChange} required>
          <option value="">Select Employee</option>
          {employees.map((employee, index) => (
            <option key={index} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
        <select name="leaveType" value={leave.leaveType} onChange={handleChange} required>
          <option value="">Select Leave Type</option>
          <option value="Medical Leave">Medical Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Annual Leave">Annual Leave</option>
          <option value="Exam Leave">Exam Leave</option>
        </select>
        <input type="date" name="fromDate" value={leave.fromDate} onChange={handleChange} required />
        <input type="date" name="toDate" value={leave.toDate} onChange={handleChange} required />
        <textarea name="remark" value={leave.remark} onChange={handleChange} placeholder="Remark"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleEmployeeSubmit = (employee) => {
    setEmployees(prevEmployees => [...prevEmployees, employee]);
  };

  const handleLeaveSubmit = (leave) => {
    console.log('Leave submitted:', leave); // Log leave data
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Employee Form</Link>
            </li>
            <li>
              <Link to="/employee-list">Employee List</Link>
            </li>
            <li>
              <Link to="/leave-form">Leave Form</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<EmployeeForm onSubmit={handleEmployeeSubmit} />} />
          <Route path="/employee-list" element={<EmployeeList employees={employees} />} />
          <Route path="/leave-form" element={<LeaveForm employees={employees} onSubmit={handleLeaveSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
