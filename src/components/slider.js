import React, { Component } from 'react';
import Slide from './slide';
import Menu from './menu';
import imgArray from '../assets/data';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: imgArray[0],
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleMenuClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenuClick);
    }

    handleMenuClick(event) {
        if (event.target.dataset.menu !== undefined) {
            let menuIndex = event.target.dataset.index
            this.setState({
                currentImg: imgArray[menuIndex],
            })
        }
    }

    render() {
        console.log('current image: '+this.state.currentImg.url);
        return (
            <div className='slider'>
                <Menu />
                <Slide currentImg={this.state.currentImg}/>
            </div>
        );
    }
}