import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
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
      </div>
    );
  }
}

export default withStyles(styles) (PaletteList);
 