import React, {useState} from 'react';
import Snowfall from 'react-snowfall'
import createScrollSnap from 'scroll-snap'

import ScreenOne from "./Components/Screen1";
import ScreenTwo from "./Components/Screen2";
import ScreenThree from "./Components/Screen3";

import './App.css';


function App() {
    //const element = document.getElementById('container') as HTMLElement

    // if(element!==null){
    //     const {bind, unbind} = createScrollSnap(element, {
    //         snapDestinationX: '0%',
    //         snapDestinationY: '50%',
    //         timeout: 100,
    //         duration: 2,
    //         threshold: 0.2,
    //         snapStop: true,
    //     }, () => console.log('element snapped'))
    //     console.log(element);
    // }else{}


  return (
      <>
          <div className={'screen'} id={'container'}>
            <div className={'screen-area'}><ScreenOne/></div>
            <div className={'screen-area'}><ScreenTwo/></div>
            <div className={'screen-area'}><ScreenThree/></div>
            <Snowfall style={{
            height: '300vh',
            }}/>
          </div>
      </>
  )
}

export default App;
