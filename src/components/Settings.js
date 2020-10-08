import React, { Component } from 'react'
import '../css/settings.css'
import Settings from '../static/settings2.png'


export default class nowPlaying extends Component {

    render() {
        return (
            <div id="screen">
               <img src={Settings} />
            </div>
        )
    }
}
