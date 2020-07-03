import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
