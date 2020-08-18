import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  
  logo: {
    marginRight: "16px",
    padding: "0 12px",
    fontSize: "24px",
    backgroundColor: "#eceff1",
    fontFamily: "'roboto'",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "rgb(26, 26, 26)",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  
  slider: {
    width: "320px",
    margin: "0 12px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "turquoise",
      outline: "none",
      border: "1px solid turquoise",
      boxShadow: "none",
      width: "12px",
      height: "12px",
      marginTop: "-2px",
      marginLeft: "-7px",
    },
    [sizes.down("md")]: {
      width: "150%",
    },
  },  
  // sliderContainer: {
  //   display: "flex",
  // },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    "& span": {
      color: "rgb(26, 26, 26)",
    },
  },  
};
