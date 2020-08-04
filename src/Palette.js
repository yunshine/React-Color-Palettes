import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Palette.css';
import 'rc-slider/assets/index.css';
// import { Route, Switch, NavLink } from 'react-router-dom';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';

class Palette extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
        {/* Navbar will go here... */}
        <div className="Palette-colors">
          {colorBoxes}
        </div>
          {/* Footer will go here... */}
      </div>
    );
  }
}

export default Palette; /// connect this component to App.js...
