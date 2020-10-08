import React, { Component } from 'react'
import ZingTouch from 'zingtouch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../static/myPic.png'
import '../css/mainScreen.css'
import RotatingWheel from './RotatingWheel'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import Screen from './Screen'




export default class MainScreen extends Component {

  state = {
    activeItem: 2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { activeItem } = this.state;
    // using the props to udate the scren number in order to switch between screens
    const { screenNumber, updateActive } = this.props

    return (
      <div id="screen">
        <div id="fullScreen">
          {screenNumber === 0 && <Screen activeItem={activeItem} updateActive={updateActive} screenNumber={screenNumber} />}
        </div>
      </div>
    )
  }


}
