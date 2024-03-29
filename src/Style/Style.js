import { fade, makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  noBox: {
    boxShadow: "none",
  },
  center: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
    alignItems: "center",
  },
  listItem: {
    [theme.breakpoints.up("md")]: {
      margin: 10,
    },
    display: "flex",
    margin: 5,
    padding: 10,
    transition: "0.3s",
    "&:hover": {
      margin: 2,
      boxShadow: "0 5px 10px grey",
    },
  },
  skillsCon: {
    width: "100%",
    border: "1px groove #fff",
  },
  skillsBar: {
    transition: "0.5s",
    height: 20,
    background:
      "linear-gradient(90deg, rgba(83,100,195,1) 9%, rgba(117,178,239,1) 92%)",
  },
  profileBg: {
    // background:
    //   "linear-gradient(0deg, rgba(83,100,195,1) 8%, rgba(117,178,237,1) 90%)",
    // background: "url(/img/topImg.jpeg)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
  },
  contentlistcon: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
  },
  postlistcon: {
    height: "auto",
    overflowY: "none",
    [theme.breakpoints.up("sm")]: {
      height: "60vh",
      overflowY: "scroll",
    },
  },
  btn: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  container: {
    padding: "5px 15px 5px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "10px 25px 10px 25px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  tab: {
    display: "block",
    padding: "12px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    paddingLeft: 15,
    width: "100% !important",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  iconCircle: {
    backgroundColor: "red",
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    width: "200px",
  },
  inputLogin: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    padding: 5,
    width: "100%",
  },
  loginBtn: {
    marginTop: 5,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    color: "white",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  discusContainer: {
    padding: 12,
  },
  Tags: {
    outline: "none",
    padding: "4px 8px",
    color: "white",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: 4,
    cursor: "pointer",
    margin: "4px",
    transition: "0.3s",

    "&:hover": {
      padding: "6px 12px",
      border: "none",
    },
    "&:active": {
      border: "none",
      outline: "none",
    },
  },
  tagsActive: {
    outline: "none",
    padding: "4px 8px",
    color: "white",
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    margin: "4px",
    backgroundColor: "#6ba1d6",
    transition: "0.3s",
    "&:hover": {
      padding: "6px 12px",
    },
    "&:active": {
      border: "none",
      outline: "none",
    },
  },
}))

export default useStyles
