import React from 'react'
import { Container } from 'react-bootstrap'

import logos from './img/logos.svg'
import logosMd from './img/logos_md.svg'
import logosSm from './img/logos_sm.svg'

import * as s from './Partners.module.scss'

const Partners = () => {
  return (
    <Container as="section" className={s.partners}>
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
