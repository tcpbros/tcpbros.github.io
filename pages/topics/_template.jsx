import React, { Component, PropTypes } from 'react'


class Template extends Component {
  render() {
    return (
      <div class="topics-container">
          <h1>Nothingness</h1>
          {this.props.children}
      </div>
    )
  }
}

Template.propTypes = {
    children: PropTypes.any,
}

export default Template;
