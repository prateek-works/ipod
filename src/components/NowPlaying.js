import React, { Component } from 'react'
import '../css/nowPlaying.css'
import Image from '../static/nowPlaying.png'

export default class nowPlaying extends Component {


    render() {
        return (
            <div id="screen">
                <div id="container">
                    <span> <img src={Image} alt="image" id="songImage" /> </span>
                    <span id="songName">Kasoor song<br /> Prateek Kuhad</span>
                </div>
                <div id="songLength"></div>
                <div id="songDurationContainer">
                    <span id="songStart">0:00</span>
                    <span id="songEnd">4:40</span>
                </div>
            </div>
        )
    }
}
