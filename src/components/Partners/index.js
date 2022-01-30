import React from 'react'

import logos from './img/logos.svg'

import * as s from './Partners.module.scss'

const Partners = () => {
  return (
    <section className={s.partners}>
      <h2>Where are we in these innovations?</h2>
      <p className="lead">
        We&apos;ve invested in 25 crypto startups and launched 50 validator
        nodes for the most popular blockchains.
      </p>
      <img src={logos} alt="Partners" />
    </section>
  )
}

export default Partners
