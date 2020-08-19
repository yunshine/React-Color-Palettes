import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
// import './PaletteList.css';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
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
                  <MiniPalette {...palette} key={palette.id} id={palette.id} handleDelete={this.props.deletePalette} handleClick={() => this.goToPalette(palette.id)} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          {/* </div> */}
        </div>
        <Dialog open={true}>
          <DialogTitle>Delete this palette?</DialogTitle>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon></CheckIcon>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon></CloseIcon>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles) (PaletteList);
 