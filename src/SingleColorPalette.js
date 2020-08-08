import React, { Component } from 'react'; // imrc is the shortcut...
import ColorBox from './ColorBox';
import Navbar from './Navbar';
// import -something-, { -something- } from './-something-';
// import './SingleColorPalette.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class SingleColorPalette extends Component {

  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    console.log(this._shades);
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val) {
    // alert(val);
    this.setState({ format: val });
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false} />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;
