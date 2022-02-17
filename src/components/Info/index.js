import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Info.module.scss'

const Info = ({ data, id }) => {
  const { header, descr, button, image } = data
  return (
    <Container id={id || null} as="section" className={s.info}>
      <div className={s.info__content}>
        <h2>{header}</h2>
        <p>{descr}</p>
        <Button as={Link} to={button?.link}>
          {button?.label}
          <Icon name={button?.icon} />
        </Button>
      </div>
      <div className={s.info__img}>
        <GatsbyImage
          image={image?.childImageSharp?.gatsbyImageData}
          alt="Illustration"
        />
      </div>
    </Container>
  )
}

export default Info
