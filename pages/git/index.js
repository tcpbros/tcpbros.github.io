import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ContentTitle from '../../components/ContentTitle';

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
          Contenidos de Git
        </h1>

        <ul className="contents">
          <li className="contents--element">
            <ContentTitle
              url={prefixLink('/git/intro/')}
              background={prefixLink('/git/intro/cover.png')}
              title='Comandos locales'
            />
          </li>

          <li className="contents--element">
            <ContentTitle
              url={prefixLink('/git/branches/')}
              background={prefixLink('/git/branches/cover.png')}
              title='Ramas'
            />
          </li>

          <li className="contents--element">
            <ContentTitle
              url={prefixLink('/git/remotes/')}
              background={prefixLink('/git/remotes/cover.jpg')}
              title='Repositorios remotos'
            />
          </li>
        </ul>
      </div>
    )
  }
}
