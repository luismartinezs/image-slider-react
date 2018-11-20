import React, { Component } from 'react';
import './App.css';
import Slider from './components/slider';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Slider className='slider'/>
      </div>
    );
  }
}

export default App;
