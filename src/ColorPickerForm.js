import React, { Component } from 'react';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from 'react-color';
import { arrayMove } from 'react-sortable-hoc';

class ColorPickerForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { currentColor: "turquoise", };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { paletteIsFull } = this.props;
    return (
      <div className="ColorPickerForm">
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
      </div>
    );
  }
}

export default ColorPickerForm;
