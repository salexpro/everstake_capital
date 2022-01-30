import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '~components/Menu'

import logo from './img/logo.svg'

import * as s from './style.module.scss'

const Header = ({ siteTitle }) => (
  <Container as="header" className={s.header}>
    <div className={s.header__logo}>
      <img src={logo} alt={siteTitle} />
    </div>
    <Menu />
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
