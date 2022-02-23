import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <>
      <Hero />
      {info.map(({ node }, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Info key={`i${i}`} id={!i && 'why'} data={node} />
      ))}
      <Cloud />
      <Partners />
      <CTA />
    </>
  )
}

export default Landing
