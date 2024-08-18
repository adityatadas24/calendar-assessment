import React, { useContext, useState } from 'react';
import { EventContext } from '../../context/Eventprovider';
import './style.css';

const EventForm = ({ eventToEdit, onClose }) => {
  const [event, setEvent] = useState(eventToEdit || { title: '', date: '', category: 'Work' });
  const { addEvent, editEvent } = useContext(EventContext);

  const handleDateChange = (date) => {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() - 1);
    setEvent({ ...event, date: adjustedDate.toISOString().slice(0, 10) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adjustedDate = new Date(event.date);
    adjustedDate.setMinutes(adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset());
    const isoDate = adjustedDate.toISOString().slice(0, 10);

    if (eventToEdit) {
      editEvent({ ...event, date: isoDate });
    } else {
      addEvent({ ...event, id: Date.now(), date: isoDate });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
    
      <div>
      <label htmlFor="event">Create Event</label>
      <input
        type="text"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        placeholder="Event Title"
        required
      />
      </div>
      <div>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        value={event.date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />
      </div>
      </div>    
      <div className='select-category'>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={event.category}
          onChange={(e) => setEvent({ ...event, category: e.target.value })}
          required
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
     
      <button className='btns' type="submit">Save</button>
    </form>
  );
};

export default EventForm;
