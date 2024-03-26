import React, { useState } from 'react';
import './ClubMembershipForm.css'; // Import your CSS file for styling

function ClubMembershipForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    email: '',
    mobile: '',
    fees: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form className="membership-form" onSubmit={handleSubmit}>
      <h1>Club Membership Form</h1>

      <div className="form-group">
        <label htmlFor="fullname">Fullname</label>
        <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="fees">Fees</label>
        <input type="number" id="fees" name="fees" value={formData.fees} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ClubMembershipForm;
