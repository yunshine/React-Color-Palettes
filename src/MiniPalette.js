import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white",
    }
  }, 
  secondary: {
    backgroundColor: "pink",
  }
}

function MiniPalette(props) {
  const {classes} = props;
  console.log(classes);
  
  return (
    <div className={`MiniPalette ${classes.main}`}>
      <h1>MiniPalette</h1>
      <h2 className={classes.secondary}>secondary classes... styles...</h2>
    </div>
  )
}

export default withStyles(styles) (MiniPalette);
