import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as s from './Where.module.scss'

const Where = () => {
  const {
    allFile: { nodes: tags },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "tags" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  return (
    <section className={s.section}>
      <h2 className={s.cloud}>
        Where are the real innovations happening?
        {tags.map(({ publicURL, name }) => (
          <img
            key={name}
            src={publicURL}
            alt={name}
            className={s[`cloud__${name}`]}
          />
        ))}
      </h2>
      <div className={s.carousel} />
    </section>
  )
}

export default Where
