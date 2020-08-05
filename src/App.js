import React, { Component } from 'react';
// import -something-, { -something- } from './-something-';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import './App.css';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  
  render() {
    return (
      <Switch> 
        <Route exact path="/" render={() => <h1>Palette List test...</h1>} />
        <Route 
          exact 
          path="/palette/:id" 
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} 
        />
      </Switch>

      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[1])}/>
      // </div>

    );
  }
}

export default App;
