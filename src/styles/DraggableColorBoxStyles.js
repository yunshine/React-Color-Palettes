import sizes from "./sizes";
import chroma from 'chroma-js';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
    [sizes.down("lg")]: {
      height: "20%",
      width: "25%",
    },
    [sizes.down("md")]: {
      height: "10%",
      width: "50%",
    },
    [sizes.down("sm")]: {
      height: "5%",
      width: "100%",
    },
  },
  boxContent: {
    position: "absolute",
    padding: "8px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    // color: "rgba(0,0,0, 0.6)",
    color: props => chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255, 0.7)" : "rgba(0,0,0, 0.7)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.2s ease-in-out",
  },
};

export default styles;
