import React, { Component } from 'react'; // imrc is the shortcut...
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
// import -something-, { -something- } from './-something-';
import './PaletteList.css'; // make a CSS file for this component..
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: "grey",
  },
};

class PaletteList extends Component {

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Color Palettes</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
                <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles) (PaletteList);
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }