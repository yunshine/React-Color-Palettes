import React, { Component } from 'react'; // imrc is the shortcut...
import Navbar from './Navbar';
// import -something-, { -something- } from './-something-';
import 'rc-slider/assets/index.css';
import './Palette.css';
// import { Route, Switch, NavLink } from 'react-router-dom';
import ColorBox from './ColorBox';

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
        {/* Navbar will go here... */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
          {/* Footer will go here... */}
      </div>
    );
  }
}

export default Palette; /// connect this component to App.js...
