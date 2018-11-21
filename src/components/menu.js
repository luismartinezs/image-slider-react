import React, { Component } from 'react';

export default class Menu extends Component {
    render() {

        let style = '';
        let menuItems = [0, 1, 2, 3, 4].map((index) => {
            style = 'menuBar';
            if (this.props.currentImg[index] === 'visible') {
                style += ' extended';
            }
            return (<div className={style} data-menu data-index={index}>
                <div className='menuItem' data-menu data-index={index}></div>
            </div>);
            });

        console.log(menuItems);
        // menu needs to have event delegation
        return (
            <div className='menu'>
                {menuItems}
            </div>
        );
    }
}