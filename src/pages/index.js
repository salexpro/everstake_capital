import React, { useState } from 'react'

import S from '../components/seo'

import Landing from '../containers/Landing'
import Terminal from '../containers/Terminal'

const IndexPage = () => {
  const [landing, setLanding] = useState(
    typeof sessionStorage !== 'undefined'
      ? sessionStorage?.getItem('landing')
      : true
  )

  const handleLanding = () => {
    sessionStorage.setItem('landing', true)
    setLanding(true)
  }

  return (
    <>
      <S />
      {landing ? <Landing /> : <Terminal openWebsite={handleLanding} />}
    </>
  )
}

export default IndexPage
