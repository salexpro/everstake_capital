import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Button } from 'react-bootstrap'
import gsap from 'gsap'

import Icon from '../Icon'

import * as s from './Info.module.scss'

const Info = ({ data, id }) => {
  const { header, descr, button, image } = data

  const symbol = '</>'

  const buzzwords = ['programing', 'blockchain', 'web3']

  const itemHeader = header.includes(symbol) ? (
    <>
      {header.substr(0, header.indexOf(symbol) - 1)}
      <span className={s.anim}>
        {buzzwords.map((w) => (
          <span id={w} key={w}>{`</${w}>`}</span>
        ))}
      </span>
      <br />
      {header.substr(header.indexOf(symbol) + 4)}
    </>
  ) : (
    header
  )

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      delay: 1,
    })

    tl.to(
      '#programing',
      {
        y: -30,
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
      },
      0
    )
      .to(
        '#blockchain',
        {
          duration: 0.5,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        0
      )
      .set(
        '#web3',
        {
          y: 30,
          scale: 0.7,
          opacity: 0,
        },
        0
      )

    tl.to(
      '#blockchain',
      {
        duration: 0.5,
        y: -30,
        scale: 0.7,
        opacity: 0,
      },
      2
    )
      .to(
        '#web3',
        {
          duration: 0.5,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        2
      )
      .set(
        '#programing',
        {
          y: 30,
          scale: 0.7,
          opacity: 0,
        },
        2
      )

    tl.to(
      '#web3',
      {
        duration: 0.5,
        y: -30,
        scale: 0.7,
        opacity: 0,
      },
      4
    )
      .to(
        '#programing',
        {
          duration: 0.5,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        4
      )
      .set(
        '#blockchain',
        {
          y: 30,
          scale: 0.7,
          opacity: 0,
        },
        4
      )

    tl.timeScale(0.5)
  }, [])

  return (
    <Container id={id || null} as="section" className={s.info}>
      <div className={s.info__content}>
        <h2>{itemHeader}</h2>
        <p>{descr}</p>
        <Button as={Link} to={button?.link}>
          {button?.label}
          <Icon name={button?.icon} />
        </Button>
      </div>
      <div className={s.info__img}>
        <GatsbyImage
          image={image?.childImageSharp?.gatsbyImageData}
          alt="Illustration"
        />
      </div>
    </Container>
  )
}

export default Info
