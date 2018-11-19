import React, { Component } from 'react';
import Slide from './slide';
import Menu from './menu';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Slide />
            </div>
        );
    }
}