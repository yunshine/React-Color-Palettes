import React, { Component } from 'react';
// import -something-, { -something- } from './-something-';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

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
    const {name, background} = this.props;
    const {copied} = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
        
        <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
        
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{this.props.background}</p>
        </div>

          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">COPY</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
