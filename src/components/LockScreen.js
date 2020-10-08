import React, { Component } from 'react'
import '../css/games.css'
import Image from '../static/lockScreen.png'


export default class LockScreen extends Component {

    // updating the screen number , i.e unlocking the screen
    handleClick = () => {
        const { updateActive } = this.props
        updateActive(0)
    }

    componentDidMount() {
        var clickButton = document.getElementById('innerCircle');
        clickButton.onclick = this.handleClick
    }

    render() {
        return (
            <div id="screen">
                <img src={Image} />
                <h4 style={{color:"white" , marginTop:"-30px"}}>Press center button to unlock</h4>
            </div>
        )
    }
}
