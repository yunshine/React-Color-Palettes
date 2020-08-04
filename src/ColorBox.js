import React, { Component } from 'react';
// import -something-, { -something- } from './-something-';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class ColorBox extends Component {
  render() {
    const {name, background} = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className="ColorBox">
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
