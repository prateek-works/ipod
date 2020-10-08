import React, { Component } from 'react'
import '../css/music.css'
import ZingTouch from 'zingtouch';
import AllSongs from './AllSongs';


export default class nowPlaying extends Component {

    // defining the states for the the music items
    state = {
        items: [
            {
                id: 1,
                name: "All Songs",
                className: "inactive"
            },
            {
                id: 2,
                name: "Artists",
                className: "inactive"
            },
            {
                id: 3,
                name: "Albums",
                className: "inactive"
            }

        ],
        activeItem: 1
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
        if (activeItem == 1 && screenNumber == 2) {
            updateActive(5)
        }
        if (activeItem == 2 && screenNumber == 2) {
            updateActive(6)
        }
        if (activeItem == 3 && screenNumber == 2) {
            updateActive(7)
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
            this.setState({ activeItem: 1 })
        }
        else if (e.detail.distanceFromOrigin > 120 && e.detail.distanceFromOrigin < 150) {
            this.setState({ activeItem: 2 })
        }
        else if (e.detail.distanceFromOrigin > 150 && e.detail.distanceFromOrigin < 180) {
            this.setState({ activeItem: 3 })
        }
        else if (e.detail.distanceFromOrigin > 180 && e.detail.distanceFromOrigin < 210) {
            this.setState({ activeItem: 1 })
        }
        else if (e.detail.distanceFromOrigin > 210 && e.detail.distanceFromOrigin < 240) {
            this.setState({ activeItem: 2 })
        }
        else if (e.detail.distanceFromOrigin > 240 && e.detail.distanceFromOrigin < 270) {
            this.setState({ activeItem: 3 })
        }
        else if (e.detail.distanceFromOrigin > 270 && e.detail.distanceFromOrigin < 300) {
            this.setState({ activeItem: 1 })
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
                <div id="screenItems">
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
            </div>)
    }
}
