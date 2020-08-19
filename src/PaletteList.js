import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './PaletteList.css';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      openDeleteDialog: false,
      deletingId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id, });
  }
  
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }
  
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes, } = this.props;
    const { openDeleteDialog, } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Color Palettes</h1>
            <Link exact to="/palette/new">Create a New Palette</Link>
          </nav>
          {/* <div className={classes.palettes}> */}
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                  <MiniPalette 
                  {...palette} 
                  key={palette.id} 
                  id={palette.id} 
                  // handleDelete={this.props.deletePalette} 
                  openDialog={this.openDialog} 
                  handleClick={() => this.goToPalette(palette.id)} 
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          {/* </div> */}
        </div>
        <Dialog open={openDeleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
          <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon></CheckIcon>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon></CloseIcon>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" onClick={this.closeDialog} />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles) (PaletteList);
 