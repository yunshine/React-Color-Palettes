import React, { Component } from 'react'; // imrc is the shortcut...
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
// import -something-, { -something- } from './-something-';
import './PaletteList.css'; // make a CSS file for this component..

class PaletteList extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <MiniPalette />
        <h1>React Color Palettes</h1>
        {palettes.map(palette => (
          <p>
            <Link exact to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
