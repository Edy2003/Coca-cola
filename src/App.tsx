import React from 'react';
import Snowfall from 'react-snowfall'

import ScreenOne from "./Components/Screen1";
import ScreenTwo from "./Components/Screen2";
import ScreenThree from "./Components/Screen3";

import './App.css';


function App() {
  return (
      <>
        <ScreenOne/>
        <ScreenTwo/>
        <ScreenThree/>
        <Snowfall style={{
            height: '300vh',
        }}
        />
      </>
  );
}

export default App;
