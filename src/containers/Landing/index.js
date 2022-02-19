import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Hero from '~components/Hero'
import Info from '~components/Info'
import Cloud from '~components/Cloud'
import Partners from '~components/Partners'
import CTA from '~components/CTA'

import * as s from './Landing.module.scss'

gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#why',
          pin: true, // pin the trigger element while active
          start: 'center center', // when the top of the trigger hits the top of the viewport
          // end: '+=100%', // end after scrolling 500px beyond the start
          end: 'bottom top',
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true,
          snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.5, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          },
        },
      })

      tl.addLabel('second')
        .to('#why0', { yPercent: -20, autoAlpha: 0, ease: 'none' })
        .fromTo(
          '#why1',
          { yPercent: 20 },
          { yPercent: 0, autoAlpha: 1, ease: 'none' },
          '-=0.2'
        )
        .addLabel('third')
        .to('#why1', { yPercent: -20, autoAlpha: 0, ease: 'none' })
        .fromTo(
          '#why2',
          { yPercent: 20 },
          { yPercent: 0, autoAlpha: 1, ease: 'none' },
          '-=0.2'
        )
    }, 500)
  }, [])

  return (
    <>
      <Hero />
      <div id="why" className={s.infos}>
        {info.map(({ node }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Info key={`info${i}`} id={`why${i}`} data={node} />
        ))}
      </div>

      <Cloud />
      <Partners />
      <CTA />
    </>
  )
}

export default Landing
