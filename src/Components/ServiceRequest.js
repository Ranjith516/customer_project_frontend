import React, { useState } from 'react';
import './ServiceRequest.css';

function ServiceRequest() {
  const [formData, setFormData] = useState({
   
    serviceNumber: '',
    enquiryType: '',
    date: '',
    
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    // Reset the form fields
    setFormData({
      date: '',
      serviceNumber: '',
      enquiryType: '',
      description: ''
      
    });
  };

  return (
    <div className="form-container" style={{ backgroundcolor: "rgb(96, 156, 156)"}}>
      <form onSubmit={handleSubmit}>
       <center><b><div>SERVICE REQUEST</div></b></center>
        <table className="form-table">
          <tbody>
            <tr>
              <b><td>Date:</td></b>
              <td>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <b><td>Service Number:</td></b>
              <td>
                <input
                  type="text"
                  name="serviceNumber"
                  value={formData.serviceNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
             <b><td>Enquiry Type:</td></b>
              <td>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                >
                 <option value="">Select</option>
                  <option value="Billing">Billing</option>
                  <option value="Technical">Technical Issues</option>
                  <option value="Others">Others</option>
                </select>
              </td>
            </tr>
            <tr>
              <b><td>Description:</td></b>
              <td>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </td>
            </tr>
            
          </tbody>
        </table>
        <button style={{backgroundColor:'blue',borderRadius:"25px",paddingLeft:'15px',paddingRight:'15px',color:'white'}} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ServiceRequest;
