import React, { Component } from 'react';

class EventForm extends Component {
  state = {
    title: '',
    date: new Date(),
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission
    console.log('Event Submitted: ', this.state);
  };

  render() {
    const { title, date } = this.state;

    return (
      <div>
        <h1>Add/Edit Event</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label>Date:</label>
            <input 
              type="date" 
              name="date" 
              value={date.toISOString().substr(0, 10)} 
              onChange={this.handleChange} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EventForm;