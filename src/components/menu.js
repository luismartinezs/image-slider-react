import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        // menu needs to have event delegation
        return (
            <div className='menu'>
                <div className='menuBar'></div>
                <div className='menuBar'></div>
                <div className='menuBar'></div>
                <div className='menuBar'></div>
                <div className='menuBar'></div>
            </div>
        );
    }
}