import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import logos from './img/logos.svg'
import logosMd from './img/logos_md.svg'
import logosSm from './img/logos_sm.svg'

import * as s from './Partners.module.scss'

const Partners = () => {
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: '#partners',
        start: '20% center',
        end: '20% center',
        once: true,
        // markers: true,
        onEnter: () => {
          gsap.to(`.${s.partners__img}`, {
            autoAlpha: 1,
            x: 0,
            duration: 2,
            ease: 'expo.out',
          })
        },
      })
    }, 1000)
  }, [])

  return (
    <Container as="section" id="partners" className={s.partners}>
      <h2 className={s.partners__header}>Where are we in these innovations?</h2>
      <p className="lead">
        We&apos;ve invested in 25 crypto startups and launched 50 validator
        nodes for the most popular blockchains.
      </p>
      <div className={s.partners__img}>
        <picture>
          <source srcSet={logosSm} media="(max-width: 639px)" />
          <source srcSet={logosMd} media="(max-width: 1199px)" />
          <img src={logos} alt="Partners" />
        </picture>
      </div>
    </Container>
  )
}

export default Partners
