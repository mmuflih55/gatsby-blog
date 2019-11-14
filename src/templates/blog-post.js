import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Container, Grid, Paper } from '@material-ui/core';
import useStyles from '../Style/Style';
import Img from "gatsby-image"

const BlogPostTemplate = (props) => {
  const classes = useStyles();
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        image={post.frontmatter.thumbnail}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container style={{ paddingTop: 15 }}>
        <Grid item xs={12} md={12}>
          <Paper className={classes.container}>
            <div style={{ minHeight: '70vh' }}>
              <h1 style={{ marginTop: 10 }}>{post.frontmatter.title}</h1>
              <label>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  {post.frontmatter.date},
            </p>
              </label>
              <div style={{display: 'flex', alignContent: 'center',alignItems:'center',width:'100%', justifyContent: 'center'}}>
                {post.frontmatter.thumbnail ?
                  // <CardMedia
                  //   style={{ height: 75, maxWidth: '75%' }}
                  //   image={post.frontmatter.thumbnail ? post.frontmatter.thumbnail : "assets/icon.png"}
                  // />
                  // <Img fixed={post.frontmatter.thumbnail}/>
                  <img alt="thumbnail" src={post.frontmatter.thumbnail} style={{maxWidth: '75%',maxHeight: 300}}/>
                  : null}
              </div>
              <div style={{whiteSpace: 'pre-line'}}>
                <MDXRenderer>{post.body}</MDXRenderer>                
              </div>
            </div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
              </Link>
                )}
              </li>
            </ul>
          </Paper>
        </Grid>
      </Container>
    </Layout>
  )
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        thumbnail
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
