import React, { Component } from 'react'
import ZingTouch from 'zingtouch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../static/myPic.png'
import MusicImage from '../static/music.png'
import Games from '../static/games.png'
import Settings from '../static/settings.png'
import '../css/screen.css'

export default class LeftScreen extends Component {

  // defining the states for the the menu items
  state = {
    items: [
      {
        id: 1,
        name: "Now Playing",
        className: "inactive"
      },
      {
        id: 2,
        name: "Music",
        className: "inactive"
      },
      {
        id: 3,
        name: "Games",
        className: "inactive"
      },
      {
        id: 4,
        name: "Settings",
        className: "inactive"
      }
    ],
    activeItem: 2
  };

  constructor(props) {
    super(props);

    // binding of this
    this.handleClick = this.handleClick.bind(this);
  }

  // method to update the screen number
  handleClick = () => {
    const { activeItem } = this.state;
    const { updateActive, screenNumber } = this.props

    // updating the screen number based on the current active item
    if (activeItem === 1 && screenNumber === 0) {
      updateActive(1)
    }
    if (activeItem === 2 && screenNumber === 0) {
      updateActive(2)
    }
    if (activeItem === 3 && screenNumber === 0) {
      updateActive(3)
    }
    if (activeItem === 4 && screenNumber === 0) {
      updateActive(4)
    }

  }
  // zingtouch logic to change the active item based on rotation of wheel
  controlRotation = (e) => {

    if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
      this.setState({ activeItem: 1 })
    }
    else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
      this.setState({ activeItem: 2 })
    }
    else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
      this.setState({ activeItem: 3 })
    }
    else if (e.detail.distanceFromOrigin > 90 && e.detail.distanceFromOrigin < 120) {
      this.setState({ activeItem: 4 })
    }
    else if (e.detail.distanceFromOrigin > 120 && e.detail.distanceFromOrigin < 150) {
      this.setState({ activeItem: 1 })
    }
    else if (e.detail.distanceFromOrigin > 150 && e.detail.distanceFromOrigin < 180) {
      this.setState({ activeItem: 2 })
    }
    else if (e.detail.distanceFromOrigin > 180 && e.detail.distanceFromOrigin < 210) {
      this.setState({ activeItem: 3 })
    }
    else if (e.detail.distanceFromOrigin > 210 && e.detail.distanceFromOrigin < 240) {
      this.setState({ activeItem: 4 })
    }
    else if (e.detail.distanceFromOrigin > 240 && e.detail.distanceFromOrigin < 270) {
      this.setState({ activeItem: 1 })
    }
    else if (e.detail.distanceFromOrigin > 270 && e.detail.distanceFromOrigin < 300) {
      this.setState({ activeItem: 2 })
    }
  }


  componentDidMount() {
    const controlRotation = this.controlRotation
    var target = document.getElementById('outerCircle');
    var clickButton = document.getElementById('innerCircle');
    clickButton.onclick = this.handleClick
    var region = new ZingTouch.Region(target);
    // binding the region where rotate property will be applied
    region.bind(target, 'rotate', function (e) {
      controlRotation(e);
    });
  }


  render() {
    const { activeItem, items } = this.state;

    return (
      <div id="screen">
        <div id="leftScreen">
          {items.map(link => {
            return (
              <div key={link.id} >
                <ul >
                  <li
                    className={
                      (link.id === activeItem ? link.className = "active" : link.className = "inactive")
                    }>
                    {link.name}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div id="imageContainer">
          {activeItem === 1 && <img src={Image} alt="image" id="image" />}
          {activeItem === 2 && <img src={MusicImage} alt="image" id="image" />}
          {activeItem === 3 && <img src={Games} alt="image" id="image" />}
          {activeItem === 4 && <img src={Settings} alt="image" id="image" />}
        </div>
      </div>
    )
  }


}
