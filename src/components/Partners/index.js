import React from 'react'
import { Container } from 'react-bootstrap'

import logos from './img/logos.svg'

import * as s from './Partners.module.scss'

const Partners = () => {
  return (
    <Container className={s.partners}>
      <h2 className={s.partners__header}>Where are we in these innovations?</h2>
      <p className="lead">
        We&apos;ve invested in 25 crypto startups and launched 50 validator
        nodes for the most popular blockchains.
      </p>
      <div className={s.partners__img}>
        <img src={logos} alt="Partners" />
      </div>
    </Container>
  )
}

export default Partners
