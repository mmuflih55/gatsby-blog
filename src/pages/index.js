import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Container, Grid, Paper, Card, CircularProgress, CardMedia, CardContent } from '@material-ui/core';
import { Container, Grid, Paper, Card, CardContent } from '@material-ui/core';
import useStyles from '../Style/Style';


const Blog = (props) => {
  // class Blog extends React.Component {
  // render() {
  const classes = useStyles();
  // const [state, setState] = useState({ isLoading: true, data: [], nextPageToken: '', search: '' });

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <Container style={{paddingTop: 15}}>
      <SEO title="All posts" />
      {/* {JSON.stringify(posts)} */}
      {/* <Paper>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
          </Paper> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <Paper className={classes.container} style={{ paddingBottom: 15 }}>
            <h2>Search</h2>
            {/* <div className={classes.search}> */}
            {/* <div className={classes.searchIcon}>
                            <Search />
                        </div> */}
            {/* <InputBase
                            onKeyDown={search}
                            placeholder="Enter Search "
                            className={classes.search}
                            inputProps={{ 'aria-label': 'search' }}
                        /> */}
            {/* </div> */}
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
                    style={{ boxShadow: `none` }}
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
                // onClick={() => { history.push(`/detail/${data.id}`) }}
                >
                  {/* <CardMedia
                                            style={{ width: 75, height: 75, minWidth:75, maxWidth:75 }}
                                            image={checkImage(data)}
                                        /> */}
                  <CardContent>
                    {/* {JSON.stringify(data)} */}
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
