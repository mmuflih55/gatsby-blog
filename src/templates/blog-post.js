import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Container, Grid, Paper } from "@material-ui/core"
import useStyles from "../Style/Style"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"

const BlogPostTemplate = props => {
  const classes = useStyles()
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const disqusConfig = {
    shortname: "mmuflih",
    config: { identifier: post.frontmatter.title },
  }

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
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ins
                  class="adsbygoogle"
                  style={{ display: "inline-block", width: 728, height: 90 }}
                  data-ad-client="ca-pub-2478817977793633"
                  data-ad-slot="9825279909"
                ></ins>
              </div>

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
              <div style={{ margin: "12px 0" }}>
                <ins
                  className="adsbygoogle"
                  style={{ display: "block", textAlign: "center" }}
                  data-ad-layout="in-article"
                  data-ad-format="fluid"
                  data-ad-client="ca-pub-2478817977793633"
                  data-ad-slot="6126736179"
                ></ins>
              </div>

              <div className="discus-container">
                <DiscussionEmbed {...disqusConfig} />
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
