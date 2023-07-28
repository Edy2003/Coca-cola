import React from 'react';
import ScreenOne from "./Components/Screen1";
import Screen2 from "./Components/Screen2";
import Snowfall from 'react-snowfall'

import './App.css';
import ScreenTwo from "./Components/Screen2";

function App() {
  return (
      <>
        <ScreenOne/>
        <ScreenTwo/>
        <Snowfall />
      </>
  );
}

export default App;
