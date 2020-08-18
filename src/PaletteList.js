import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
// import './PaletteList.css';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyles";

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
          <div className={classes.palettes}>
            {palettes.map(palette => (
                <MiniPalette {...palette} key={palette.id} id={palette.id} handleDelete={this.props.deletePalette} handleClick={() => this.goToPalette(palette.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles) (PaletteList);
 