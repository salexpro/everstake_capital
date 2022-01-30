import React from 'react'

import * as s from './Strips.module.scss'

const Strips = () => {
  const CONTENT = Array(3).fill('GET IN TOUCH').join(' ')
  return (
    <>
      <div className={s.strip}>{CONTENT}</div>
      <div className={s.strip}>{CONTENT}</div>
    </>
  )
}

export default Strips
