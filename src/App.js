import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarView from "./components/CalendarViewPage/CalendarView";
import EventDetails from "./components/EventDetails/EventDetails";
import { EventProvider } from "./context/Eventprovider";
// import { EventContext } from './context/Eventprovider';

const App = () => (
  <div className="App">
   <EventProvider >
    <Routes>
      <Route path="/" element={<CalendarView/>} />
      <Route path="/event" element={<EventDetails/>} />
    </Routes>
  </EventProvider>
  </div>
 
);

export default App;
