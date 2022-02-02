import React from 'react'

import * as s from './Strips.module.scss'

const Strips = () => {
  const CONTENT = Array(3)
    .fill('GET IN TOUCH')
    .map((c) => <span>{c}</span>)

  return (
    <>
      <div className={s.strip}>{CONTENT}</div>
      <div className={s.strip}>{CONTENT}</div>
    </>
  )
}

export default Strips
