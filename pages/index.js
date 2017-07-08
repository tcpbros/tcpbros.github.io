import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ContentTitle from '../components/ContentTitle';
import moment from 'moment';
import styled from 'styled-components';


const ArticleTitle = styled.h2`
  color: rgb(211, 63, 0);
`

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  color: rgb(211, 63, 0);
  &:hover {
    text-decoration: underline;
  }
`;

const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;


const Date = styled.p`
  color: lightgray;
  font-size: 0.75em;
`;

const Tag = styled.span`
  background-color: rgb(255, 200, 26);
  color: rgb(83, 83, 83);
  border-radius: 5px;
  margin-right: 0.5em;
  padding: 0.2em 0.5em;
`;


export default class Index extends React.Component {
  render () {
    moment.locale('es');
    const pages = this.props.route.pages.filter(page => (
      'title' in page.data && 'date' in page.data
    )).map(page => ({
      ...page,
      data: {
        ...page.data,
        date: moment.utc(page.data.date),
        tags: (page.data.tags || '').split(/\s*[,;]\s*/).filter(tag => tag !== ''),
      }
    })).sort((a, b) => a.data.date < b.data.date);
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": ""},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />

        <ArticleList>
          {pages.map(page => (
            <li key={page.path}>
              <ArticleLink to={page.path}>
                <ArticleTitle>{page.data.title}</ArticleTitle>
              </ArticleLink>
              {page.data.summary && <p>{page.data.summary}</p>}
              <Date>{page.data.date.fromNow()}</Date>
              {page.data.tags && <p> {page.data.tags.map(tag => <Tag key={tag}>{tag}</Tag>) } </p> }
            </li>
          ))}
        </ArticleList>

      </div>
    )
  }
}
