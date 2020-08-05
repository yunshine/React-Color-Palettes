import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpalettes</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
          </div>
        </div>
        <div className="select-container">
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
