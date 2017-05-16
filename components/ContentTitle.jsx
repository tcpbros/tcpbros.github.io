import React, {Component} from 'react';
import {Link} from 'react-router';


class ContentTitle extends Component {
  render () {
    return (
      <Link className='content-title-link' to={this.props.url}>
        <div
          className="content-title"
          style={{
            background: `url('${this.props.background}') no-repeat center`,
            backgroundSize: 'cover',
          }}
        >
          <div className="content-description">
            <span className="content-name"> {this.props.title} </span>
          </div>
      </div>
    </Link>
    );
  }
}

ContentTitle.propTypes = {
  url: React.PropTypes.string.isRequired,
  background: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
}


export default ContentTitle;
