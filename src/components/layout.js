import React from "react"
import styled from "styled-components"

// import { rhythm, scale } from "../utils/typography"
import { Container } from "@material-ui/core"
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // const { location, title, children } = this.props
  // const { location, title, children } = this.props
  // const rootPath = `${__PATH_PREFIX__}/`
  // const blogPath = `${__PATH_PREFIX__}/blog/`

  // if (location.pathname === rootPath || location.pathname === blogPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={location.pathname === blogPath ? `/blog/` : `/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/blog/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <Wrapper>
      <Header/>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
