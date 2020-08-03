import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
// import './Palette.css';
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Palette extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Palette() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
    return (
      <div className="Palette">
        {/* Navbar will go here... */}
        <div className="Palette-colors">
          {/* A bunch of color boxes will go here... */}
        </div>
          {/* Footer will go here... */}
      </div>
    );
  }
}

export default Palette; /// connect this component to App.js...
