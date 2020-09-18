import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import useStyles from "../Style/Style"
import "../Style/profile.css"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa"
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
    go: 0,
  })
  useEffect(() => {
    if (feinView === true) {
      setState(s => ({
        ...s,
        react: "85%",
        vue: "85%",
        flutter: "55%",
        cordova: "70%",
      }))
    }
    if (beinView === true) {
      setState(s => ({ ...s, node: "80%", php: "80%", java: "40%", go: "45%" }))
    }
  }, [feinView, beinView])

  return (
    <div>
      <SEO title="My Profile and skills" />
      <Grid
        container
        spacing={3}
        style={{ padding: 20 }}
        justify="space-between"
      >
        <Grid item xs={12} md={12}>
          <h3 style={{ margin: 0 }}>Skills</h3>
        </Grid>

        <Grid item xs={12} md={12}>
          <h5 style={{ margin: 0 }}>Front End :</h5>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <b>React</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.react }}
            ></div>
          </div>
          <b>Vue</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.vue }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <b>Cordova</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.cordova }}
            ></div>
          </div>
          <b>Flutter</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.flutter }}
            ></div>
          </div>
        </Grid>
        <Grid ref={feref} item xs={12} md={12}>
          <h5 style={{ margin: 0 }}>Back End :</h5>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <b>PHP</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.php }}
            ></div>
          </div>
          <b>Node Js</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.node }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <b>Java (Spring)</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.java }}
            ></div>
          </div>

          <b>Go</b>
          <div className={classes.skillsCon}>
            <div
              className={classes.skillsBar}
              style={{ width: state.go }}
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
      <Grid container justify="center" justifyContent="center">
        <Grid item xs={12} md={12} justify="center">
          <div
            style={{
              position: "relative",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className={classes.profileBg}>
              <img
                alt="header bg"
                src="/img/topImg.jpeg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  filter: "blur(3px)",
                  WebkitFilter: "blur(3px)",
                  MozFilter: "blur(3px)",
                  OFilter: "blur(3px)",
                  MsFilter: "blur(3px)",
                  filter:
                    'progid:DXImageTransform.Microsoft.Blur(PixelRadius="3")',
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "85vh",
                width: "100%",
                color: "white",
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            >
              <h1>Hi, I'm Muhammad Muflih</h1>
              <h2>
                Software Engineer with {new Date().getFullYear() - 2017},
                {new Date().getMonth() - 2} years experiences
              </h2>
              <h2>A freelancer, digital nomads wannabe</h2>
              <h2>
                <FaMapMarkerAlt /> Pekalongan, Indonesia
              </h2>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <a
                  href="https://github.com//mmuflih55"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    style={{ fontSize: 48, color: "white", margin: 10 }}
                  />
                </a>
                <a
                  href="https://twitter.com/muh_muflih"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter
                    style={{ fontSize: 48, color: "white", margin: 10 }}
                  />
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
              {/* <div style={{ display: "flex", flexDirection: "row" }}>
                <a
                  href="https://www.upwork.com/o/profiles/users/~0144e9f709debafa5b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    style={{
                      fontSize: 26,
                      fontFamily: "sans-serif",
                      color: "white",
                      margin: 10,
                    }}
                  >
                    Upwork
                  </span>
                </a>

                <a
                  href="https://www.peopleperhour.com/freelancer/development-it/muhammad-muflih-sofware-engineer-xmjwjxj"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    style={{
                      fontSize: 26,
                      fontFamily: "sans-serif",
                      color: "white",
                      margin: 10,
                    }}
                  >
                    PPH
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <SkillPanel />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Profile
