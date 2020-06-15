import React from "react"
import { graphql } from "gatsby"
import { Grid, Paper } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Grid container spacing={2} style={{ padding: 20 }}>
          <Grid item xs={12} md={12}>
            <Paper
              style={{
                minHeight: "80vh",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
