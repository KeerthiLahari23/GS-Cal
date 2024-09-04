import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<CalendarView/>} />
            <Route path="/add-event" element={<EventForm/>} />
            <Route path="/event/:id" element={<EventDetails/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
