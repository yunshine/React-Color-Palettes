import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
// import './SingleColorPalette.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class SingleColorPalette extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    // this.state = { shades: this.gatherShades(this.props.palette) };
    console.log(this._shades);
    this.gatherShades = this.gatherShades.bind(this);
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
    // this.setState({ key: value });
  }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
    return (
      <div className="SingleColorPalette">
        {/* <h1>{this.state.SingleColorPalette}</h1>
        <h1>{this.props.SingleColorPalette}</h1> */}
        <h1>This is the SingleColorPalette component...</h1>
      </div>
    );
  }
}

export default SingleColorPalette;
