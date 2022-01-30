import React from 'react'
import { Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Info.module.scss'

const Info = ({ data }) => {
  const { header, descr, button } = data
  return (
    <section className={s.info}>
      <h2>{header}</h2>
      <p>{descr}</p>
      <Button as="a" href={button?.link}>
        {button?.label}
        <Icon name={button?.icon} />
      </Button>
    </section>
  )
}

export default Info
