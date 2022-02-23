import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import * as s from './Strips.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Strips = () => {
  const CONTENT = Array(4)
    .fill('GET IN TOUCH')
    // eslint-disable-next-line react/no-array-index-key
    .map((c, i) => <span key={`c${i}`}>{c}</span>)

  const ease = 'elastic.out(1.2, 0.3)'

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#cta',
      start: '10% center',
      end: '10% center',
      // markers: true,
      once: true,
      onEnter: () => {
        gsap.to(`.${s.strip}:last-child`, {
          rotate: '+=5',
          duration: 3,
          ease,
        })
        gsap.to(`.${s.strip}:nth-last-child(2)`, {
          rotate: '-=5',
          duration: 3,
          ease,
        })
      },
    })
  }, [])

  return (
    <>
      <Marquee id="strip1" className={s.strip} gradientWidth="10%">
        {CONTENT}
      </Marquee>
      <Marquee
        id="strip2"
        className={s.strip}
        direction="right"
        gradientWidth="10%"
        gradientColor={[41, 47, 51]}
      >
        {CONTENT}
      </Marquee>
    </>
  )
}

export default Strips
