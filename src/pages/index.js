import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'

import Layout from '../components/Layout'
import S from '../components/seo'

import Icon from '~components/Icon'

const IndexPage = () => (
  <Layout>
    <Container>
      <S title="Home" />
      <h1>Howdy!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-icon.png"
        layout="constrained"
        width={300}
        alt="A Gatsby logo"
        style={{ marginBottom: `1.45rem` }}
        placeholder="blurred"
      />
      <Icon name="globe" size={60} />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
    </Container>
  </Layout>
)

export default IndexPage
