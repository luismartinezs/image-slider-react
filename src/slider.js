import React, { Component } from 'react';
import Slide from './slide';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Slide />
                <Slide />
            </div>
        );
    }
}