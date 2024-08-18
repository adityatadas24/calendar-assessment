import React, { useContext, useState } from "react";
import "./Style.css";
import { EventContext } from "../../context/Eventprovider";

import { useNavigate } from "react-router-dom";
import CategoryFilter from "../CategoryFilter";

const EventDetails = () => {
  const {
    events,
    deleteEvent,
    setEvents,
    date,
    getEventsForDate,
    selectedCategory,
    setSelectedCategory,
  } = useContext(EventContext);
  const [save, setSave] = useState(null);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleEdit(id, text) {
    setSave(id);
    setInput(text);
  }

  function saveTask(id) {
    setEvents(
      events.map((item) => (item.id === id ? { ...item, title: input } : item))
    );
    setSave(null);
  }

  function backTopage() {
    navigate("/");
  }

  return (
    <div style={{ textDecoration: "none" }} className="calendarContainer">
      <div className="event-date">
        <h2>{date.toDateString()} ✨:</h2>
        <button onClick={backTopage}>Create more new events</button>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="eventList">
        {getEventsForDate(date).length > 0 ? (
          getEventsForDate(date).map((event) => (
            <div key={event.id} className="event">
              {save === event.id ? (
                <div>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <h2>
                    <span style={{ fontSize: "29px", fontWeight: "700" }}>
                      Event:{" "}
                    </span>{" "}
                    {event.title}
                  </h2>
                </div>
              )}
              {save === event.id ? (
                <button className="savebtn" onClick={() => saveTask(event.id)}>
                  Save
                </button>
              ) : (
                <button
                  className="editbtn"
                  onClick={() => handleEdit(event.id, event.title)}
                >
                  Edit
                </button>
              )}

              <button
                className="deletebtn"
                onClick={() => deleteEvent(event.id)}
              >
                delete event
              </button>
            </div>
          ))
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
