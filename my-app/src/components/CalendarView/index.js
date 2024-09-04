import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';

class CalendarView extends Component {
    state = {
        date: new Date(),
        events: [
          { id: 1, title: 'Project Kickoff Meeting', date: new Date('2024-09-10'), details: 'Initial meeting to discuss project scope, deliverables, and timeline.' },
          { id: 2, title: 'Client Presentation', date: new Date('2024-09-15'), details: 'Present the project proposal and initial design mockups to the client.' },
          { id: 3, title: 'Team Building Activity', date: new Date('2024-09-20'), details: 'An afternoon of team-building exercises and activities to boost morale.' },
          { id: 4, title: 'Code Review Session', date: new Date('2024-09-25'), details: 'Review the codebase with the development team to ensure best practices are followed.' },
          { id: 5, title: 'Release Planning', date: new Date('2024-10-01'), details: 'Plan the next release, including features to be included and timeline.' },
          { id: 6, title: 'Mid-Sprint Check-in', date: new Date('2024-10-05'), details: 'Quick check-in to assess sprint progress and adjust as needed.' },
          { id: 7, title: 'Client Feedback Session', date: new Date('2024-10-10'), details: 'Gather feedback from the client after presenting the first draft of the project.' },
          { id: 8, title: 'Product Launch', date: new Date('2024-10-15'), details: 'Official launch of the product with marketing and PR activities.' },
          { id: 9, title: 'Post-Launch Review', date: new Date('2024-10-20'), details: 'Review the product launch, assess what went well and areas for improvement.' },
          { id: 10, title: 'Retrospective Meeting', date: new Date('2024-10-25'), details: 'Reflect on the project as a whole, discuss lessons learned, and plan for future improvements.' },
        ]
      };

  onDateChange = date => {
    this.setState({ date });
    console.log(date)
  };

  render() {
    const { date, events } = this.state;

    return (
      <div>
        <h1>Calendar</h1>
        <Calendar onChange={this.onDateChange} value={date} />
        <ul>
         {events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.title}</Link> on {event.date.toDateString()}
          </li>
        ))}
        </ul>
            <Link to="/add-event">Add Event</Link>
        </div>
        );
  }
}

export default CalendarView;