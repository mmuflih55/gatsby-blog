import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Grid, Paper, Card, CardContent, CardMedia, InputBase } from '@material-ui/core';
import useStyles from '../Style/Style';
import '../Style/index.css'
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    popular: allMdx(limit: 4, filter: {}, sort: {fields: timeToRead, order: DESC}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          timeToRead
        }
      }
    }
    postlist: allMdx(limit: 12,sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            description
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  const classes = useStyles();
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.postlist.edges
  const popular = data.popular.edges
  useEffect(() => {
    console.log('test')
  }, [])
  return (
    <Layout location={props.location} title={siteTitle}>
      <Container style={{ paddingTop: 15 }}>
        <SEO title="All posts" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <Paper className={classes.container} style={{ paddingBottom: 15 }}>
              {/* <h2>Search</h2>
              <InputBase
                // onKeyDown={search}
                placeholder="Enter Search "
                className={classes.search}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Paper>
            <Paper className={classes.container} style={{ paddingBottom: 15, marginTop:15 }}> */}
              <h2>Popular Post</h2>
              {popular.map(({node})=>(
                <Link
                  key={node.fields.slug}
                  to={`/blog${node.fields.slug}`}
                >
                  <p>{node.frontmatter.title}</p>
                </Link>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={`${classes.container} ${classes.postlistcon}`}>
              <div>
                <h2>Posts</h2>
                {posts === null || posts.length === 0 ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit', padding: '10px' }}>
                    <h1>No Data</h1>
                  </div>
                ) : posts.map(({ node }) => (
                  <Link
                    key={node.fields.slug}
                    to={`/blog${node.fields.slug}`}
                  >
                    <Card
                      style={
                        {
                          display: 'flex',
                          padding: 10,
                          margin: 5
                        }
                      }
                      className={classes.btn}
                    >
                      <CardMedia
                        style={{ width: 75, height: 75, minWidth: 75, maxWidth: 75 }}
                        image={node.frontmatter.thumbnail ? node.frontmatter.thumbnail : "assets/icon.png"}
                      />
                      {/* <img src="/assets/diff-of-innovation.jpg"/> */}
                      <CardContent>
                        <div className={classes.contentlistcon}>
                          {node.frontmatter.title || node.fields.slug}
                          <small>{node.frontmatter.date}</small>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
                )}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
// }

export default Blog

// filter: {frontmatter: {title: {regex: "//"},