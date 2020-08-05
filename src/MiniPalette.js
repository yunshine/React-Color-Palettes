import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const styles = {
  root: {

  },
  colors: {

  }, 
  title: {

  }, 
  emoji: {

  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  
  return (
    <div className={`MiniPalette ${classes.root}`}>
      <div className={classes.colors}></div>
  <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles) (MiniPalette);
