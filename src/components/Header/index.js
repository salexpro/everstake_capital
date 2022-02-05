import React, { useState } from 'react'
import { Container, Offcanvas, Button } from 'react-bootstrap'
import cn from 'classnames'

import logo from '~img/logo_square.svg'

import Menu from '../Menu'
import Icon from '../Icon'

import * as s from './style.module.scss'

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)

  const handleMenu = () => setShow((prev) => !prev)

  return (
    <>
      <header className={s.header}>
        <Container className={s.header__inner}>
          <div className={s.header__logo}>
            <img src={logo} alt={siteTitle} />
          </div>
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
        <Button>
          Pitch idea
          <Icon name="bulb" />
        </Button>
      </Offcanvas>
    </>
  )
}

export default Header
