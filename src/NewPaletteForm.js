import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import classNames from 'classnames';
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

// import -something-, { -something- } from './-something-';
// import './NewPaletteForm.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});


class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: true, 
      currentColor: "turquoise",
      newColorName: "",
      colors: [],
      newPaletteName: "",
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
    this.state.colors.every(
      ({color}) => color !== this.state.currentColor
    )
  );
  ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
  this.props.palettes.every(
    ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
  )
);
}

  handleSubmit() {
    let newName = this.state.newPaletteName;
    const newPalette = { paletteName: newName, colors: this.state.colors, id: newName.toLowerCase().replace(/ /g, "-") };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  addNewColor() {
    const newColor = {color: this.state.currentColor, name: this.state.newColorName};
    this.setState({ colors: [...this.state.colors, newColor], newColorName: "" });
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor(newColor) {
    // console.log(newColor);
    this.setState({currentColor: newColor.hex});
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
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
            </ValidatorForm>

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Create a Palette</Typography>
          <div>
            <Button variant="contained" color="secondary">Clear Palette</Button>
            <Button variant="contained" color="primary">Random Color</Button>
          </div>
          <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} />

          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator 
            value={this.state.newColorName} 
            name="newColorName" 
            onChange={this.handleChange} 
            validators={["required", "isColorNameUnique", "isColorUnique"]} 
            errorMessages={["This field is required", "Color name must be unique", "Color must be unlique"]}
            />
            <Button 
            variant="contained" 
            color="primary" 
            style={{backgroundColor: this.state.currentColor}} 
            type="submit" 
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            {this.state.colors.map(color => (
              <DraggableColorBox key={color.name} color={color.color} name={color.name} handleClick={() => this.removeColor(color.name)} />
            ))}
        </main>

      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);