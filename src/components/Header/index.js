import React, { useState } from 'react'
import { useLocation } from '@reach/router'

import { Link } from 'gatsby'
import { Container, Offcanvas, Button } from 'react-bootstrap'
import cn from 'classnames'

import logo from '~img/logo_square.svg'

import Menu from '../Menu'
import Icon from '../Icon'

import * as s from './style.module.scss'

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)

  const handleMenu = () => setShow((prev) => !prev)

  const { pathname } = useLocation()

  return (
    <>
      <header className={s.header}>
        <Container className={s.header__inner}>
          <Link to="/" className={s.header__logo}>
            <img src={logo} alt={siteTitle} />
          </Link>
          <Menu variant="header" />
          <button
            type="button"
            onClick={handleMenu}
            className={cn(s.hamb, { [s.open]: show })}
          >
            Open Menu
          </button>
        </Container>
      </header>
      <Offcanvas show={show} placement="top">
        <Menu variant="dropdown" onHide={handleMenu} />
        <Button
          as={Link}
          to="/contact"
          style={{ visibility: pathname !== '/' && 'hidden' }}
        >
          Pitch idea
          <Icon name="bulb" />
        </Button>
      </Offcanvas>
    </>
  )
}

export default Header
