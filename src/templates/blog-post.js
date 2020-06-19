import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Container, Grid, Paper } from "@material-ui/core"
import useStyles from "../Style/Style"
import Img from "gatsby-image"

const BlogPostTemplate = props => {
  const classes = useStyles()
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container style={{ paddingTop: 15 }}>
        <Paper className={classes.container}>
          <div
            style={{
              minHeight: "70vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={10}>
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
                  {post.frontmatter.date}
                </p>
              </label>
              <div
                style={{
                  display: "flex",
                  marginBottom: 25,
                  alignContent: "center",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Img
                  objectFit={"contain"}
                  draggable={true}
                  imgStyle={{ width: "100%", objectFit: "contain" }}
                  style={{ maxWidth: "75%", maxHeight: 300, flex: 1 }}
                  fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                />
              </div>
              <div className="detailPost">
                <MDXRenderer>{post.body}</MDXRenderer>
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
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </Grid>
          </div>
        </Paper>
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
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
