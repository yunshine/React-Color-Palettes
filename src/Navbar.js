import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
// import { IconButton } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link exact to="/">reactcolorpalettes</Link>
        </div>
        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
          </div>
        )}
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">Hex - #57c5f7</MenuItem>
            <MenuItem value="rgb">RGB - rgb(228,118,214)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(35,168,145, 1.0)</MenuItem>
          </Select>
        </div>
    <Snackbar 
      anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
      open={this.state.open} 
      onClose={this.closeSnackbar} 
      autoHideDuration={2500} 
      message={<span id='message-id'>Format changed to {format.toUpperCase()}.</span>} 
      ContentProps={{"aria-describedby": "message-id"}} 
      action={[
        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" arial-label="close">
          <CloseIcon />
        </IconButton>
      ]} />
      </nav>
    );
  }
}

export default Navbar;
