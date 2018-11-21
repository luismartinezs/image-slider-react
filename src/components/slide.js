'use static'

import React from 'react'

const Slide = ({ className, ...props }) => {
    let classNames = ['slide', className].join(' ');
    return (
        <div className={classNames} >
            <img className='bg-img' src={props.currentImg.url} alt={props.currentImg.alt} />
            <h2 className='text'>{props.currentImg.text}</h2>
        </div>
    );
}

export default Slide;