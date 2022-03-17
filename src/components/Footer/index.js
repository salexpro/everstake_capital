/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import logo from '~img/logo_line.svg'
import logoSm from '~img/logo_square.svg'

import * as s from './style.module.scss'

const Footer = ({ siteTitle }) => {
  return (
    <Container id="contact" as="footer" className={s.footer}>
      <span className={s.footer__copy}>
        © All Rights Reserved, {new Date().getFullYear()}.
      </span>
      <div className={s.footer__logo}>
        <picture>
          <source srcSet={logoSm} media="(max-width: 639px)" />
          <img src={logo} alt={siteTitle} />
        </picture>
      </div>
      <ul className={s.footer__menu}>
        <li>
          <a href="https://everstake.capital/terms-and-conditions">
            Terms of use
          </a>
        </li>
        <li>
          <a href="https://everstake.capital/privacy-policy">Privacy policy</a>
        </li>
      </ul>
    </Container>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
