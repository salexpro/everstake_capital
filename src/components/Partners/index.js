import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import logos from './img/logos.svg'
import logosMd from './img/logos_md.svg'
import logosSm from './img/logos_sm.svg'

import * as s from './Partners.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Partners = () => {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: '20% center',
      end: '20% center',
      once: true,
      // markers: true,
      onEnter: () => {
        gsap.to(imgRef.current, {
          autoAlpha: 1,
          x: 0,
          duration: 2,
          ease: 'expo.out',
        })
      },
    })
  }, [])

  return (
    <Container
      as="section"
      id="partners"
      ref={sectionRef}
      className={s.partners}
    >
      <h2 className={s.partners__header}>Where are we in these innovations?</h2>
      <p className="lead">
        We&apos;ve invested in 25 crypto startups and launched 50 validator
        nodes for the most popular blockchains.
      </p>
      <div className={s.partners__img} ref={imgRef}>
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
