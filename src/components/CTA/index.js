import React from 'react'

import Icon from '../Icon'
import Strips from './Strips'

import * as s from './Cta.module.scss'

const CTA = () => {
  return (
    <div className={s.cta}>
      <button type="button">
        <Icon name="big_bulb" size={100} />
        Pitch idea
      </button>
      <Strips />
    </div>
  )
}

export default CTA
