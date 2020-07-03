import React, { useState } from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  Slide,
  AppBar,
  Toolbar,
  useScrollTrigger,
  IconButton,
  ButtonBase,
  List,
  ListItem,
  SwipeableDrawer,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Home, Person } from "@material-ui/icons"
import useStyles from "../Style/Style"
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const MenuAppBar = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger()
  const [state, setState] = useState({ openDrawer: false })

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ openDrawer: open })
  }

  function Drawer() {
    const sideList = () => (
      <div
        role="menu"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        style={{ width: 250 }}
        tabIndex={0}
      >
        <List>
          {[
            { icon: <Home />, text: "Home", url: "/" },
            { icon: <Person />, text: "Profile", url: "/profile" },
          ].map((item, i) => (
            <ListItem button key={i} component={Link} to={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
      <div>
        <SwipeableDrawer
          open={state.openDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList()}
        </SwipeableDrawer>
      </div>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="inherit">
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.sectionDesktop}>
              <ButtonBase disableRipple component={Link} to="/">
                <Typography className={classes.tab} noWrap>
                  Home
                </Typography>
              </ButtonBase>
              <ButtonBase disableRipple component={Link} to="/profile">
                <Typography className={classes.tab} noWrap>
                  Profile
                </Typography>
              </ButtonBase>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <a
                href="https://github.com/mmuflih55"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub
                  aria-label="github"
                  style={{ color: "black", margin: 5 }}
                />
              </a>
              <a
                href="https://twitter.com/muh_muflih"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter
                  aria-label="twitter"
                  style={{ color: "black", margin: 5 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-muflih-574b2b71"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin
                  aria-label="linkedin"
                  style={{ color: "black", margin: 5 }}
                />
              </a>
              <a
                href="https://www.instagram.com/m_muflih5"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram
                  aria-label="ig"
                  style={{ color: "black", margin: 5 }}
                />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
      {Drawer()}
    </React.Fragment>
  )
}

const Header = () => {
  return (
    <div>
      <MenuAppBar />
    </div>
  )
}

export default Header
