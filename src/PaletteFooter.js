import React from 'react'; // imrc is the shortcut...
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteFooterStyles';
// import -something-, { -something- } from './-something-';
// import './PaletteFooter.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles) (PaletteFooter);
