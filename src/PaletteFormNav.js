import React, { Component } from 'react';
import DraggableColorList from './DraggableColorList';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from 'react-color';
import { arrayMove } from 'react-sortable-hoc';

class PaletteFormNav extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  constructor(props) {
    super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  }

  // PaletteFormNav() {
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
      <div className="PaletteFormNav">
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default" 
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>

            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator 
              label="Palette Name" 
              name="newPaletteName" 
              value={this.state.newPaletteName} 
              onChange={this.handleChange} 
              validators={["required", "isPaletteNameUnique"]} 
              errorMessages={["This field is required", "Palette name must be unique"]}
              />
              <Button variant="contained" color="primary" type="submit">Save Palette</Button>
              <Link exact to="/">
                <Button variant="contained" color="secondary">Back to Palettes</Button>
              </Link>
            </ValidatorForm>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav; /// connect this component to App.js...
