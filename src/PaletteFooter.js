import React from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
// import './PaletteFooter.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

function PaletteFooter(props) {
  const { paletteName, emoji} = props;
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
