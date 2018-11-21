'use static'

import React, { Component } from 'react';
import Slide from './slide';
import Menu from './menu';
import imgArray from './assets/data';
import './slider.css';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: [
                'visible',
                'invisible',
                'invisible',
                'invisible',
                'invisible',
            ],
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.rotateSlide = this.rotateSlide.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleMenuClick);
        this.rotateSlide();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenuClick);
    }

    handleMenuClick(event) {
        if (event.target.dataset.menu !== undefined) {

            let menuIndex = event.target.dataset.index
            this.changeSlide(menuIndex);
        }
    }

    rotateSlide() {

        let _this = this;

        // If you don't want the slider to rotate automatically, comment from this line
        setTimeout((index) => {
            index++;
            if (index > 4) index = 0;
            _this.changeSlide(index);
            _this.rotateSlide();
        }, 5000, _this.state.currentImg.indexOf('visible'));
        // Until this line

    }

    changeSlide(index) {
        let currentImgState = this.state.currentImg;

        this.setState(() => {
            for (let i = 0; i < currentImgState.length; i++) {
                currentImgState[i] = 'invisible';
                if (i === +index) {
                    currentImgState[i] = 'visible';
                }
            }
            return {
                currentImg: currentImgState,
            };
        });
    }

    render() {

        let slides = [0, 1, 2, 3, 4].map((index) => {
            return (<Slide className={this.state.currentImg[index]} currentImg={imgArray[index]} data-slide-index={index} />);
        });

        return (
            <div className='slider'>
                <Menu currentImg={this.state.currentImg} />
                {slides};
            </div>
        );
    }
}