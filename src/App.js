import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
// import -something-, { -something- } from './-something-';
// import { Route, Switch, NavLink } from 'react-router-dom';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[4]}/>

        {/* <NavLink exact activeClassName="active-link" to="/-something-">-some-text-here-</NavLink> */}

        {/* <Switch> */}
          {/* use path="/" to assign a default page... */}
          {/* <Route exact path="/-something-" component={-something-} /> */}
          {/* <Route exact path="/-something-" component={() => <-something- name='Muffins"> } /> */}
          {/* <Route exact path="/-something-" render={() => <-something- name='Biscuit"> } /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
