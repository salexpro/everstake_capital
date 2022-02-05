import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import cn from 'classnames'

import * as s from './Cloud.module.scss'

const Cloud = () => {
  const {
    tags: { nodes: tags },
    partners: { nodes: partners },
  } = useStaticQuery(graphql`
    {
      tags: allFile(filter: { relativeDirectory: { eq: "tags" } }) {
        nodes {
          name
          publicURL
        }
      }
      partners: allFile(filter: { relativeDirectory: { eq: "partners" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  return (
    <section id="portfolio" className={s.section}>
      <Container className={s.cloud}>
        <h2 className={s.sign}>
          Where are the real innovations happening?
          {tags.map(({ publicURL, name }) => (
            <img
              key={name}
              src={publicURL}
              alt={name}
              className={cn(s.tag, s[`tag__${name}`])}
            />
          ))}
        </h2>
      </Container>
      <Marquee
        className={s.carousel}
        // gradient={false}
        gradientWidth="25%"
        gradientColor={[19, 23, 25]}
        speed={30}
      >
        {' '}
        {partners.map(({ name, publicURL }) => (
          <img
            key={name}
            className={s.carousel__item}
            src={publicURL}
            alt={name}
          />
        ))}
      </Marquee>
    </section>
  )
}

export default Cloud
