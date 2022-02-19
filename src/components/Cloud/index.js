import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import cn from 'classnames'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { random } from 'lodash'

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

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: '#portfolio',
        start: '15% center',
        end: '15% center',
        // markers: true,
        onEnter: () => {
          document.querySelectorAll(`.${s.sign} .${s.tag}`).forEach((item) => {
            gsap.to(item, {
              autoAlpha: 1,
              y: 0,
              ease: 'elastic.out(1, 0.4)',
              duration: 1.5,
              delay: random(0.7, true),
            })
          })
        },
      })
    }, 1000)
  }, [])

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
