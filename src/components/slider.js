import React, { Component } from 'react';
import Slide from './slide';
import Menu from './menu';
import imgArray from '../assets/data';

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
            let currentImgState = this.state.currentImg;

            this.setState(() => {
                for (let i=0; i < currentImgState.length; i++) {
                    currentImgState[i] = 'invisible';
                    if ( i === +menuIndex ) {
                        currentImgState[i] = 'visible';
                    }
                }
                return {
                    currentImg: currentImgState,
                };
            });
        }
    }

    render() {
        return (
            <div className='slider'>
                <Menu />
                <Slide className={this.state.currentImg[0]} currentImg={imgArray[0]} data-slide-index='0' />
                <Slide className={this.state.currentImg[1]} currentImg={imgArray[1]} data-slide-index='1' />
                <Slide className={this.state.currentImg[2]} currentImg={imgArray[2]} data-slide-index='2' />
                <Slide className={this.state.currentImg[3]} currentImg={imgArray[3]}  data-slide-index='3' />
                <Slide className={this.state.currentImg[4]} currentImg={imgArray[4]}  data-slide-index='4' />
            </div>
        );
    }
}