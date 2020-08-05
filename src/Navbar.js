import React, { Component } from 'react';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
    // this.changeFormat = this.changeFormat.bind(this);
  }

handleChange(e) {
  this.setState({format: e.target.value});
  this.props.handleChange(e.target.value);
}

  render() {
    const { level, changeLevel, handleChange } = this.props;
    const { format } = this.state;
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
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">Hex - #57c5f7</MenuItem>
            <MenuItem value="rgb">RGB - rgb(228,118,214)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(35,168,145, 1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}

export default Navbar;
