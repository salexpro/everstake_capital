/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'

import * as s from './style.module.scss'

const Layout = ({ children, isTerminal }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return isTerminal ? (
    children
  ) : (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <main className={s.main}>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </>
  )
}

export default Layout
