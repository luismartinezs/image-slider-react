import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        // menu needs to have event delegation
        return (
            <div className='menu'>
                <div className='menuBar' data-menu data-index='0'>
                    <div className='menuItem'></div>
                </div>
                <div className='menuBar' data-menu data-index='1'>
                    <div className='menuItem'></div>
                </div>
                <div className='menuBar' data-menu data-index='2'>
                    <div className='menuItem'></div>
                </div>
                <div className='menuBar' data-menu data-index='3'>
                    <div className='menuItem'></div>
                </div>
                <div className='menuBar' data-menu data-index='4'>
                    <div className='menuItem'></div>
                </div>
            </div>
        );
    }
}