import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": ""},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          TCP Bros <small>tecnología, ciencia y programación</small>
        </h1>
      </div>
    )
  }
}
