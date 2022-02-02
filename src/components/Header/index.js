import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '~components/Menu'

import logo from './img/logo.svg'

import * as s from './style.module.scss'

const Header = ({ siteTitle }) => (
  <header className={s.header}>
    <Container className={s.header__inner}>
      <div className={s.header__logo}>
        <img src={logo} alt={siteTitle} />
      </div>
      <Menu />
    </Container>
  </header>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
