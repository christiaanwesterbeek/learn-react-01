import React from 'react'
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>HelloWorld {txt}</div>
    )
  }
}

HelloWorld.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default HelloWorld
