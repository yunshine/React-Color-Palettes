import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "turquoise", newColorName: "", };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );
  }

  updateCurrentColor(newColor) {
    this.setState({currentColor: newColor.hex});
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit() {
    const newColor = {color: this.state.currentColor, name: this.state.newColorName};
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div className={classes.pickerContainer}>
        <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={this.updateCurrentColor} />

        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false} ref="form">
          <TextValidator 
          value={newColorName} 
          name="newColorName" 
          placeholder="Color Name" 
          variant="filled" 
          margin="normal" 
          className={classes.colorNameInput} 
          onChange={this.handleChange} 
          validators={["required", "isColorNameUnique", "isColorUnique"]} 
          errorMessages={["This field is required", "Color name must be unique", "Color must be unlique"]}
          />

          <Button 
          variant="contained" 
          color="primary" 
          style={{backgroundColor: paletteIsFull ? "grey" : currentColor}} 
          disabled={paletteIsFull} 
          type="submit" 
          className={classes.addColor} 
          >
            {paletteIsFull ? "Palette is Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles) (ColorPickerForm);
