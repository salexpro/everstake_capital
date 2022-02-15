import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '~components/Layout'
import Hero from '~components/Hero'
import Info from '~components/Info'
import Cloud from '~components/Cloud'
import Partners from '~components/Partners'
import CTA from '~components/CTA'

const Landing = () => {
  const {
    allHomeJson: { edges: info },
  } = useStaticQuery(graphql`
    {
      allHomeJson {
        edges {
          node {
            image {
              childImageSharp {
                gatsbyImageData(width: 500, quality: 100, placeholder: NONE)
              }
            }
            header
            descr
            button {
              icon
              label
              link
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero />
      {info.map(({ node }, i) => (
        <Info id={!i && 'why'} data={node} />
      ))}
      <Cloud />
      <Partners />
      <CTA />
    </Layout>
  )
}

export default Landing
