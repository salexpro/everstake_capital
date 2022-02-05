import React from 'react'

import Layout from '../components/Layout'
import S from '../components/seo'

import Hero from '../components/Hero'
import Info from '../components/Info'
import Cloud from '../components/Cloud'
import Partners from '../components/Partners'
import CTA from '../components/CTA'

const IndexPage = () => (
  <Layout>
    <S />
    <Hero />
    <Info
      id="why"
      data={{
        header: 'We speak </programming> language',
        descr:
          'We have been running nodes and RPCs, developing smart contracts, and building blockchain products from scratch since 2018. On top of that, we train Rust, GO, and Solidity developers.',
        button: {
          label: 'Speak with us',
          link: '/contact',
          icon: 'chat',
        },
      }}
    />
    <Info
      data={{
        header: 'We know how to get things done',
        descr:
          "It's hard to build something innovative from scratch alone. We developed dozens of products like Metaplex, Everlend, Astroport, and offer you our best practices.",
        button: {
          label: 'Get things done',
          link: '/contact',
          icon: 'check',
        },
      }}
    />
    <Info
      data={{
        header: "We're driven by ideas, too",
        descr:
          'Everstake Capital helps transform your vision into a product  and always respects your decisions.',
        button: {
          label: 'Pitch idea',
          link: '/contact',
          icon: 'bulb',
        },
      }}
    />
    <Cloud />
    <Partners />
    <CTA />
  </Layout>
)

export default IndexPage
