import React, { useContext, useState } from "react";
import Calendar from "react-calendar"; // You may use a library for calendar view
import EventForm from "../EventForm/EventForm";
import './Calendar.css'
import { EventContext } from "../../context/Eventprovider";
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
const CalendarView = () => {
  const { events, setDate, date } = useContext(EventContext);

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [error , setError] = useState('')

  const handleDateChange = (newDate) => {
    setDate(newDate);

    const eventsOnSelectedDate = events.filter(event => event.date === newDate.toISOString().slice(0, 10));

    if (eventsOnSelectedDate.length > 0) {
      navigate("/event");
    } else {
      setError('No events for the selected date');
    }
  };


  return (
  
      <div className="calendarContainer">
   <h1>Event Calendar</h1>
        <Calendar onChange={handleDateChange} value={date}  
          calendarType="gregory"
          className="calender-body"
         />
        <button onClick={() => setShowForm(true)} className="addButton">
          Add Event
        </button>
        {showForm && <EventForm onClose={() => setShowForm(false)} />}
        {error && <p>{error}</p>}
      </div>
   
  );
};

export default CalendarView;
