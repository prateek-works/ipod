// importing all the required libraries
import React, { Component } from 'react';
import '../css/App.css';
import ZingTouch from 'zingtouch';
import '../css/index.css';
import '../css/mainScreen.css'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons'
import { faFastForward } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { render, screen } from '@testing-library/react';
import RotatingWheel from './RotatingWheel';
import MainScreen from './MainScreen';
import NowPlaying from './NowPlaying'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'
import AllSongs from './AllSongs'
import Artists from './Artists'
import Albums from './Albums'
import LockScreen from './LockScreen'



// constants for using the FontAwesomeIcons

const backward = <FontAwesomeIcon icon={faFastBackward} />
const forward = <FontAwesomeIcon icon={faFastForward} />
const play = <FontAwesomeIcon icon={faPlay} />
const pause = <FontAwesomeIcon icon={faPause} />
const wifi = <FontAwesomeIcon icon={faWifi} />
const battery = <FontAwesomeIcon icon={faBatteryThreeQuarters} />

// class based component
export default class App extends Component {

  // defining the states required
  state = {
    screenNumber: -1,
    time: this.getCurrentTime(),
  }
  constructor() {
    super();
  }

  // method to update the active screen number
  updateActive = (screenNum) => {
    this.setState({ screenNumber: screenNum })
  }


  componentDidMount() {
    // set an interval of 10 seconds to update time
    this.stateId = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 10000);
  }

  // function for showing the time in the status bar 
  getCurrentTime() {
    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if (today.getMinutes() < 10) {
      time = today.getHours() + ":0" + today.getMinutes();
    }
    return time;
  }

// render method
  render() {
    const { screenNumber, time } = this.state
    return (
      <div className="App">
        <div id="statusBar">
          <p>iPod</p>
          <span id="wifi">{wifi}</span>
          <span id="time">{time}</span>
          <span id="battery">{battery}</span>
        </div>

        {screenNumber == -1 && <LockScreen screenNumber={screenNumber} updateActive={this.updateActive} />}
        {screenNumber == 0 && <MainScreen screenNumber={screenNumber} updateActive={this.updateActive} />}
        {screenNumber == 1 && <NowPlaying screenNumber={screenNumber} />}
        {screenNumber == 2 && <Music screenNumber={screenNumber} screenNumber={screenNumber} updateActive={this.updateActive} />}
        {screenNumber == 3 && <Games screenNumber={screenNumber} />}
        {screenNumber == 4 && <Settings screenNumber={screenNumber} />}
        {screenNumber == 5 && <AllSongs screenNumber={screenNumber} />}
        {screenNumber == 6 && <Artists screenNumber={screenNumber} />}
        {screenNumber == 7 && <Albums screenNumber={screenNumber} />}

        <RotatingWheel screenNumber={screenNumber} updateActive={this.updateActive} />

      </div>



    );
  }
}

