import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // open: true, 
      stage: "form", 
      newPaletteName: "", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
    this.props.palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    )
  );
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  savePalette(emoji) {
    // console.log(emoji.native);
    const newPalette = {
      paletteName: this.state.newPaletteName, 
      emoji: emoji.native, 
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: "" });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  render() {
    const { newPaletteName } = this.state;
    const { hideForm } = this.props;

    return (
      <div>
        <Dialog
          onClose={hideForm}
          open={this.state.stage === "emoji"}
          >
            <DialogTitle id="form-dialog-title">Select a Palette Emoji</DialogTitle>
            <Picker title="" onSelect={this.savePalette} />
        </Dialog>

        <Dialog
          open={this.state.stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a unique name for this palette.
            </DialogContentText>


              <TextValidator 
              label="Palette Name" 
              name="newPaletteName" 
              value={newPaletteName} 
              fullWidth 
              margin="normal" 
              onChange={this.handleChange} 
              validators={["required", "isPaletteNameUnique"]} 
              errorMessages={["This field is required", "Palette name must be unique"]}
              />

            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">Save Palette</Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
