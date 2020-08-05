import React, { Component } from 'react';
import Navbar from './Navbar';
// import -something-, { -something- } from './-something-';
import 'rc-slider/assets/index.css';
import './Palette.css';

import ColorBox from './ColorBox';

class Palette extends Component {
  
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    alert(val);
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
          {/* Footer will go here... */}
      </div>
    );
  }
}

export default Palette;
