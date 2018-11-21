import React from 'react'

// export default class Slide extends React.Component {
//     render() {
//         return (
//             <div className='slide'>
//                 <img className='bg-img' src={this.props.currentImg.url} alt={this.props.currentImg.alt}/>
//                 <h2 className='text'>{this.props.currentImg.text}</h2>
//             </div>
//         );
//     }
// }

const Slide = ({className, ...props}) => {
    let classNames = ['slide', className].join(' ');
    return (
        <div className={classNames} >
            <img className='bg-img' src={props.currentImg.url} alt={props.currentImg.alt} />
            <h2 className='text'>{props.currentImg.text}</h2>
        </div>
    );
}

export default Slide;