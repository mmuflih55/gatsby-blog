import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  InputBase,
  Tabs,
  Tab,
} from "@material-ui/core"
import Img from "gatsby-image"
import useStyles from "../Style/Style"
import "../Style/index.css"
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    recentlist: allMdx(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    techlist: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "tech" } } }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
            thumbnail {
              childImageSharp {
                fixed(height: 75, width: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }

    bloglist: allMdx(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
            thumbnail {
              childImageSharp {
                fixed(height: 75, width: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const classes = useStyles()
  const { data } = props
  const [search, setSearch] = useState("")
  const [tabindex, setTabIndex] = useState(0)
  const siteTitle = data.site.siteMetadata.title
  const recents = data.recentlist.edges

  const posts = data.techlist

  const blogs = data.bloglist

  // const popular = data.popular.edges
  const onSearchChange = event => {
    setSearch(event.target.value)
  }
  const onTabChange = (e, nv) => {
    setTabIndex(nv)
  }

  const TabPanel = props => {
    const { children, value, index, data, ...other } = props
    const [filter, setFilter] = useState([])
    useEffect(() => {
      if (data.tags) setFilter(data.tags.map(v => v.fieldValue))
    }, [data.tags])
    const filteredData =
      data.tags &&
      data.edges.filter(
        ({ node }) =>
          node.frontmatter.title.toLowerCase().includes(search.toLowerCase()) &&
          node.frontmatter.tags.some(items => filter.includes(items))
      )
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        className={classes.postlistcon}
        {...other}
      >
        <div style={{ padding: 12 }}>
          {data.tags &&
            data.tags.map((v, i) => (
              <button
                key={i}
                className={
                  filter.includes(v.fieldValue)
                    ? classes.tagsActive
                    : classes.Tags
                }
                onClick={() => {
                  let tempF = [...filter]
                  if (filter.includes(v.fieldValue)) {
                    tempF.splice(filter.indexOf(v.fieldValue), 1)
                    setFilter(tempF)
                  } else {
                    tempF.push(v.fieldValue)
                    setFilter(tempF)
                  }
                }}
              >
                {v.fieldValue}
              </button>
            ))}
        </div>
        {value === index && (
          <div>
            {posts === null || posts.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "inherit",
                  padding: "10px",
                }}
              >
                <h1>No Data</h1>
              </div>
            ) : (
              filteredData.map(({ node }) => (
                <Link key={node.fields.slug} to={node.fields.slug}>
                  <Card className={[classes.btn, classes.listItem].join(" ")}>
                    <CardMedia
                      component={Img}
                      src={node.frontmatter.thumbnail.childImageSharp.fixed.src}
                      style={{
                        width: 75,
                        height: 75,
                        minWidth: 75,
                        maxWidth: 75,
                      }}
                      fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                    />
                    {/* <img src="/assets/diff-of-innovation.jpg"/> */}
                    <CardContent style={{ padding: "0 0 0 10px" }}>
                      <div className={classes.contentlistcon}>
                        <div>{node.frontmatter.title || node.fields.slug}</div>
                        <small>{node.frontmatter.date}</small>
                        <div>
                          {node.frontmatter.tags &&
                            node.frontmatter.tags.map((v, i) => (
                              <span key={i} className={classes.tagsActive}>
                                {v}
                              </span>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        )}
      </Typography>
    )
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="BG" />

      <Container style={{ paddingTop: 15 }}>
        <SEO title="Muflih's Personal Blog" image="/assets/icon.png" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper
              className={classes.container}
              style={{ paddingBottom: 15, marginBottom: 5 }}
            >
              <h2>Search</h2>
              <InputBase
                className={classes.search}
                inputProps={{ "aria-label": "search" }}
                onChange={onSearchChange}
                value={search}
                placeholder="Input search and press enter..."
              />
            </Paper>
            <Paper
              className={classes.container}
              style={{ paddingBottom: 15, marginBottom: 15 }}
            >
              <h2>Popular Post</h2>
              {recents.map(({ node }) => (
                <Link key={node.fields.slug} to={node.fields.slug}>
                  <p>{node.frontmatter.title}</p>
                </Link>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={`${classes.container}`}>
              <h2>Posts</h2>
              <Tabs
                value={tabindex}
                indicatorColor="primary"
                textColor="primary"
                onChange={onTabChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Tech" />
                <Tab label="Others" />
              </Tabs>
              {/* tech panel */}
              <TabPanel data={posts} value={tabindex} index={0} />
              <TabPanel data={blogs} value={tabindex} index={1} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Blog
