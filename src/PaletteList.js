import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './PaletteList.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

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
    return (
      <div className="PaletteList">
        {/* <h1>{this.state.PaletteList}</h1>
        <h1>{this.props.PaletteList}</h1> */}
        <h1>This is the PaletteList component...</h1>
      </div>
    );
  }
}

export default PaletteList;
