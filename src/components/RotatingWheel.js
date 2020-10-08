import React, { Component } from 'react'
import '../css/wheel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons'
import { faFastForward } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import App from './App'

// icons for music player
const backward = <FontAwesomeIcon icon={faFastBackward} />
const forward = <FontAwesomeIcon icon={faFastForward} />
const play = <FontAwesomeIcon icon={faPlay} />
const pause = <FontAwesomeIcon icon={faPause} />

export default class rotatingWheel extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
}

// updating of screen number on click of menu button
  handleClick = () => {
    const {updateActive} = this.props
    updateActive(0)
  }

  render() {
    return (
      <div>
        <div id="outerCircle">
          <div id="innerCircle"></div>
          <div id="menuIcon" onClick={this.handleClick}><h2>MENU</h2></div>
          <div id="backIcon">{backward}</div>
          <div id="forwardIcon">{forward}</div>
          <div id="playIcon">{play}</div>
          <div id="pauseIcon">{pause}</div>
        </div>
      </div>


    );
  }
}
