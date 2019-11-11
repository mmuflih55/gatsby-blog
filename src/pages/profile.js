import React from 'react';
import Layout from "../components/layout"
import useStyles from './../Style/Style'
import '../Style/profile.css'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Container, Grid, Paper } from '@material-ui/core';

const Profile = (props) => {
    const classes = useStyles();

    return (
        <Layout location={props.location} title='portofilio'>
            <div className={classes.profileBg} style={{ top: 150, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: '85vh', width: '100vw', color: 'white' }}>
                    <h1>Hi, I'm Muhammad Muflih</h1>
                    <h2>Software Engineer with {new Date().getFullYear() - 2017},{new Date().getMonth() - 2} years experiences</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a href="https://github.com//mmuflih55" rel="noopener noreferrer" target="_blank"><FaGithub style={{ fontSize: 48, color: 'white', margin: 10 }} /></a>
                        <a href="https://twitter.com/muh_muflih" rel="noopener noreferrer" target="_blank"><FaTwitter style={{ fontSize: 48, color: 'white', margin: 10 }} /></a>
                        <a href="https://www.linkedin.com/in/muhammad-muflih-574b2b71" rel="noopener noreferrer" target="_blank"><FaLinkedin style={{ fontSize: 48, color: 'white', margin: 10 }} /></a>
                        <a href="https://www.instagram.com/m_muflih5" rel="noopener noreferrer" target="_blank"><FaInstagram style={{ fontSize: 48, color: 'white', margin: 10 }} /></a>
                    </div>
                </div>
            </div>
            <div>
                <Grid container spacing={2} style={{ padding: 20 }}>
                    <Grid xs={12} md={12}>
                        <h4>Skills</h4>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.center}>
                        <div className={classes.skillsCon}>
                            <label>React</label>
                            <div style={{ width: 200, height: 20, backgroundColor: 'rgba(117,178,237,1)' }}></div>
                        </div>
                        <div className={classes.skillsCon}>
                            <label>Vue</label>
                            <div style={{ width: 200, height: 20, backgroundColor: 'rgba(117,178,237,1)' }}></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.center}>
                        <div className={classes.skillsCon}>
                            <label>Cordova</label>
                            <div style={{ width: 200, height: 20, backgroundColor: 'rgba(117,178,237,1)' }}></div>
                        </div>
                        <div className={classes.skillsCon}>
                            <label>Flutter</label>
                            <div style={{ width: 200, height: 20, backgroundColor: 'rgba(117,178,237,1)' }}></div>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </Layout>
    )
}

export default Profile;