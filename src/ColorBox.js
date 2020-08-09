import React, { Component } from 'react';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './ColorBox.css';

const styles ={
  colorBox: {
    width: "20%",
    height: props => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.3s",
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0, 0.7)" : "white",
  }, 
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0, 0.7)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    bottom: "0px",
    right: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0, 0.7)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0",
  },
}

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
        
        <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
        
        <div className={`copy-msg ${copied && "show"}`}>
          <h1 className={isLightColor && "dark-text"}>copied!</h1>
          {/* <p className={isLightColor && "dark-text"}>{this.props.background}</p> */}
          <p className={classes.copyText}>{this.props.background}</p>
        </div>

          <div className="copy-container">
            <div className="box-content">
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
