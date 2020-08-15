import React from 'react';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
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
  static defaultProps = {
    maxColors: 20,
  }
  constructor(props) {
    super(props);
    this.state = { 
      open: true, 
      currentColor: "turquoise",
      newColorName: "",
      colors: this.props.palettes[0].colors,
      // newPaletteName: "",
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
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
  }

  clearColors() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    // pick a random color from existing palettes...
    const allColors = this.props.palettes.map(p => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  handleSubmit(newPaletteName) {
    // let newName = this.state.newPaletteName;
    const newPalette = { 
      paletteName: newPaletteName, 
      colors: this.state.colors, 
      id: newPaletteName.toLowerCase().replace(/ /g, "-") 
    };
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

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav open={open} classes={classes} handleSubmit={this.handleSubmit} palettes={palettes} />
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
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={this.clearColors}
            >
              Clear Palette
              </Button>
            <Button variant="contained" color="primary" onClick={this.addRandomColor} disabled={paletteIsFull}>Random Color</Button>
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
            style={{backgroundColor: paletteIsFull ? "grey" : this.state.currentColor}} 
            disabled={paletteIsFull} 
            type="submit" 
            >
              {paletteIsFull ? "Palette is Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </Drawer>
        
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            <DraggableColorList 
            colors={this.state.colors} 
            removeColor={this.removeColor} 
            axis="xy" 
            onSortEnd={this.onSortEnd} 
            />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
