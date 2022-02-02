import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Info.module.scss'

const Info = ({ data, id }) => {
  const { header, descr, button } = data
  return (
    <Container id={id} as="section" className={s.info}>
      <div className={s.info__content}>
        <h2>{header}</h2>
        <p>{descr}</p>
        <Button as="a" href={button?.link}>
          {button?.label}
          <Icon name={button?.icon} />
        </Button>
      </div>
      <div className={s.info__img} />
    </Container>
  )
}

export default Info
