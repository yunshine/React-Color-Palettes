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
  },
  boxContent: {
    position: "absolute",
    padding: "8px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "rgba(0,0,0, 0.6)",
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