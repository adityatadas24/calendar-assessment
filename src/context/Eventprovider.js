import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting",
      date: "2024-08-20",
      description: "Team meeting",
      category: "Work",
    },
    {
      id: 2,
      title: "Birthday Party",
      date: "2024-08-21",
      category: "Personal",
    },
  ]);
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getEventsForDate = (date) => {
    const day = date.toISOString().slice(0, 10);
    return events.filter(
      (event) =>
        event.date === day &&
        (selectedCategory === "All" || event.category === selectedCategory)
    );
  };
  const addEvent = (event) => {
    setEvents([...events, event]);
   
  };
  const editEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };
  const deleteEvent = (id) =>{
    setEvents(events.filter((event) => event.id !== id))
  
  }



  return (
    <EventContext.Provider
      value={{
        getEventsForDate,
        date,
        setDate,
        setEvents,
        events,
        addEvent,
        editEvent,
        deleteEvent,
        selectedCategory, setSelectedCategory
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
