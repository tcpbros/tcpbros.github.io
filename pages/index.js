import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ContentTitle from '../components/ContentTitle';

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
          Contenidos
        </h1>

        <ul className="contents">
          <li className="contents--element">
            <ContentTitle
              url={prefixLink('/git/')}
              background={prefixLink('/git/cover.png')}
              title='Git'
            />
          </li>
        </ul>
      </div>
    )
  }
}
