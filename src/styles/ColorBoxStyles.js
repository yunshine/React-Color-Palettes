import chroma from 'chroma-js';
import sizes from "./sizes";

export default {
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
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => props.showingFullPalette ? "20%" : "33.33333333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => props.showingFullPalette ? "10%" : "20%",
    },
    [sizes.down("xs")]: {
      height: props => props.showingFullPalette ? "5%" : "10%",
      width: "100%",
    },
    // [sizes.up("sm")]: {
      
    // },
    // "@media (max-width: 500px)": {
    //   width: "100%",
    // },
    // "@media (max-width: 900px)": {
    //   width: "50%",
    // },
  },
  boxContent: {
    position: "absolute",
    padding: "8px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
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
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textshadow: "1px 2px rgba(54, 54, 54, 0.5)",
      background: "rgba(255, 255, 255, 0.3)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      textTransform: "uppercase",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.3s ease-in-out",
    transitionDelay: "0.2s",
  }
};
