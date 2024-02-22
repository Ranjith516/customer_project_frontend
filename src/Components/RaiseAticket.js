import React, { Component } from 'react';

class RaiseATicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      description: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Show alert message
    alert('Request raised successfully!');
    // Reset form fields
    this.setState({
      category: '',
      description: ''
    });
  }

  render() {
    return (
      <div className="container pt-5 raise-ticket-container" style={{ backgroundColor: 'lightblue', height: 500, width: 600 }}>
        <h2>Raise a Ticket</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleChange}>
              <option value="">Select</option>
              <option value="Service Interruptions">Service Interruptions</option>
              <option value="Billing Inquiries">Billing Inquiries</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Account Management">Account Management</option>
              <option value="Network Coverage">Network Coverage</option>
              <option value="General Inquiries">General Inquiries</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default RaiseATicket;
