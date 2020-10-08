import React, { Component } from 'react'
import '../css/games.css'
import GamesImage from '../static/games2.png'


export default class Games extends Component {

    render() {
        return (
            <div id="screen">
                <img src={GamesImage} />
            </div>
        )
    }
}
