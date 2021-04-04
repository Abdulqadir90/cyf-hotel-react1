import React from "react";
import AppHeader from "./AppHeader";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Bookings />
    </div>
  );
};

export default App;
