import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'
import AuthorMediaElement from '../components/AuthorMediaElement';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        {typeof(post.author) !== 'undefined' && (
          <AuthorMediaElement {...config.authors[post.author]}/>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  },
})
