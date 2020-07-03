import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import useStyles from "./../Style/Style"
import "../Style/profile.css"
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Grid } from "@material-ui/core"
import { useInView } from "react-intersection-observer"
import SEO from "../components/seo"

const SkillPanel = () => {
  const classes = useStyles()
  const [feref, feinView] = useInView()
  const [beref, beinView] = useInView()
  const [state, setState] = useState({
    react: 0,
    vue: 0,
    flutter: 0,
    cordova: 0,
    php: 0,
    java: 0,
    python: 0,
  })
  useEffect(() => {
    if (feinView === true) {
      setState(s => ({
        ...s,
        react: 200,
        vue: 220,
        flutter: 150,
        cordova: 180,
      }))
    }
    if (beinView === true) {
      setState(s => ({ ...s, php: 200, python: 100, java: 100 }))
    }
  }, [feinView, beinView])

  return (
    <div>
      <SEO title="My Profile and skills" />
      <Grid container spacing={2} style={{ padding: 20 }}>
        <Grid item xs={12} md={12}>
          <h3 style={{ margin: "0 20px 0 20px" }}>Skills</h3>
        </Grid>
        <hr />
        <Grid item xs={12} md={12}>
          <h5 style={{ margin: "0 20px 0 20px" }}>Front End :</h5>
        </Grid>
        <Grid
          style={{ marginTop: 0 }}
          item
          xs={12}
          md={6}
          className={classes.center}
        >
          <div className={classes.skillsCon}>
            <b>React</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.react }}
            ></div>
          </div>
          <div className={classes.skillsCon}>
            <b>Vue</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.vue }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <div className={classes.skillsCon}>
            <b>Cordova</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.cordova }}
            ></div>
          </div>
          <div className={classes.skillsCon}>
            <b>Flutter</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.flutter }}
            ></div>
          </div>
        </Grid>
        <Grid ref={feref} item xs={12} md={12}>
          <h5 style={{ margin: "0 20px 0 20px" }}>Back End :</h5>
        </Grid>
        <Grid
          style={{ marginTop: 0 }}
          item
          xs={12}
          md={6}
          className={classes.center}
        >
          <div className={classes.skillsCon}>
            <b>PHP</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.php }}
            ></div>
          </div>
          <div className={classes.skillsCon}>
            <b>Python Django</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.python }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <div className={classes.skillsCon}>
            <b>Java (Spring)</b>
            <div
              className={classes.skillsBar}
              style={{ width: state.java }}
            ></div>
          </div>
        </Grid>
      </Grid>
      <div ref={beref}></div>
    </div>
  )
}

const Profile = props => {
  const classes = useStyles()

  return (
    <Layout location={props.location} title="portofilio">
      <div
        className={classes.profileBg}
        style={{
          top: 150,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "85vh",
            width: "100vw",
            color: "white",
          }}
        >
          <h1>Hi, I'm Muhammad Muflih</h1>
          <h2>
            Software Engineer with {new Date().getFullYear() - 2017},
            {new Date().getMonth() - 2} years experiences
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://github.com//mmuflih55"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub style={{ fontSize: 48, color: "white", margin: 10 }} />
            </a>
            <a
              href="https://twitter.com/muh_muflih"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter style={{ fontSize: 48, color: "white", margin: 10 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-muflih-574b2b71"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin
                style={{ fontSize: 48, color: "white", margin: 10 }}
              />
            </a>
            <a
              href="https://www.instagram.com/m_muflih5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram
                style={{ fontSize: 48, color: "white", margin: 10 }}
              />
            </a>
          </div>
        </div>
      </div>
      <SkillPanel />
    </Layout>
  )
}

export default Profile
