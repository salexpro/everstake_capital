import React from 'react'
import { Link } from 'gatsby'

import Strips from './Strips'

import * as s from './Cta.module.scss'

const CTA = () => {
  return (
    <section id="cta" className={s.cta}>
      <Link to="/contact" type="button" className={s.cta__button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <mask id="a">
            <path
              fillRule="evenodd"
              d="M38 87h24v4H38v-4ZM26 50c0 9 5 17 12 21v12h24V71a24 24 0 1 0-36-21Z"
              clipRule="evenodd"
            />
          </mask>
          <path
            fillOpacity=".2"
            fillRule="evenodd"
            d="M38 87h24v4H38v-4ZM26 50c0 9 5 17 12 21v12h24V71a24 24 0 1 0-36-21Z"
            clipRule="evenodd"
          />
          <path
            d="M62 87h4v-4h-4v4Zm-24 0v-4h-4v4h4Zm24 4v4h4v-4h-4Zm-24 0h-4v4h4v-4Zm0-20h4v-3l-2-1-2 4Zm0 12h-4v4h4v-4Zm24 0v4h4v-4h-4Zm0-12-2-4-2 1v3h4Zm12-21h4-4ZM62 83H38v8h24v-8Zm4 8v-4h-8v4h8Zm-28 4h24v-8H38v8Zm-4-8v4h8v-4h-8Zm6-20c-6-3-10-10-10-17h-8c0 10 6 19 14 24l4-7Zm2 16V71h-8v12h8Zm20-4H38v8h24v-8Zm-4-8v12h8V71h-8Zm12-21c0 7-4 14-10 17l4 7c8-5 14-14 14-24h-8ZM50 30c11 0 20 9 20 20h8c0-15-13-28-28-28v8ZM30 50c0-11 9-20 20-20v-8c-15 0-28 13-28 28h8Z"
            mask="url(#a)"
          />
          <path d="M4 48h16v4H4zm76 0h16v4H80zM48 20V4h4v16zm23 6 11-11 3 3-11 11zm-46 3L14 18l3-3 11 12z" />
        </svg>
        Pitch idea
      </Link>
      <Strips />
    </section>
  )
}

export default CTA
