import React, { useState } from 'react'

import S from '../components/seo'

import Layout from '../components/Layout'
import Landing from '../containers/Landing'
import Terminal from '../containers/Terminal'

const IndexPage = () => {
  const [landing, setLanding] = useState(
    typeof sessionStorage !== 'undefined'
      ? sessionStorage?.getItem('landing')
      : false
  )

  const handleLanding = () => {
    sessionStorage.setItem('landing', true)
    setLanding(true)
  }

  return (
    <Layout isTerminal={!landing}>
      <S />
      {landing ? <Landing /> : <Terminal openWebsite={handleLanding} />}
    </Layout>
  )
}

export default IndexPage
