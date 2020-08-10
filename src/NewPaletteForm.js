import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
// import './NewPaletteForm.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class NewPaletteForm extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // NewPaletteForm() {
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
      <div className="NewPaletteForm">
        {/* <h1>{this.state.NewPaletteForm}</h1>
        <h1>{this.props.NewPaletteForm}</h1> */}
        <h1>This is the NewPaletteForm component...</h1>
      </div>
    );
  }
}

export default NewPaletteForm; /// connect this component to App.js...
