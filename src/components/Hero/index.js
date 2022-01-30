import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from 'react-bootstrap'

import Icon from '../Icon'

import everstake from './img/everstake.svg'

import * as s from './Hero.module.scss'

const Hero = () => {
  const {
    allFile: { nodes: partners },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "partners" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  return (
    <section className={s.hero}>
      <div className={s.hero__content}>
        <h1>Money is cheap, expertise is priceless. We bridge the gap.</h1>
        <p className="lead">
          Everstake Capital invests in early-stage blockchain startupsand
          provide them with technical expertise.
        </p>
        <Button>
          Pitch idea
          <Icon name="bulb" />
        </Button>
      </div>
      <div className={s.hero__partners}>
        <div className={s.hero__partners__top}>
          <p>Invests in projects built on</p>
          <p>
            Backed by the biggest staking provider
            <img src={everstake} alt="Everstake" />
          </p>
          <div className={s.herp__partners__bottom}>
            {partners.map(({ name, publicURL }) => (
              <img key={name} src={publicURL} alt={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
