
import React, { Component } from 'react';

class EventDetails extends Component {
  state = {
    event: {
      id: 1,
      title: 'Meeting',
      date: new Date(),
      details: 'This is a detailed description of the event.'
    }
  };

  render() {
    const { event } = this.state;
    
    return (
      <div>
        <h1>{event.title}</h1>
        <p>Date: {event.date.toDateString()}</p>
        <p>Details: {event.details}</p>
        <button onClick={()=>this.props.history.replace("/")}>Back to Calendar</button>
      </div>
    );
  }
}

export default EventDetails;