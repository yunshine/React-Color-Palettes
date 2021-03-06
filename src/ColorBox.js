import React, { Component } from 'react';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorBoxStyles';
// import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied:false}), 1250);
    });
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    const {copied} = this.state;
    const isLightColor = chroma(background).luminance() >= 0.7;
    // const isDarkColor = chroma(background).luminance() <= 0.08;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
        
        <div style={{ background }} className={classNames(classes.copyOverlay, {[classes.showOverlay]: copied})} />
        
        <div className={classNames(classes.copyMsg, {[classes.showMessage]: copied})}>
          <h1 className={isLightColor && "dark-text"}>copied!</h1>
          {/* <p className={isLightColor && "dark-text"}>{this.props.background}</p> */}
          <p className={classes.copyText}>{background}</p>
        </div>

          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>COPY</button>
          </div>
          {showingFullPalette && (
            <Link exact to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles) (ColorBox);
