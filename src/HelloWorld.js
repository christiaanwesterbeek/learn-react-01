import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>HelloWorld {txt}</div>
    )
  }
}

HelloWorld.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

HelloWorld.defaultProps = {
  txt: 'Default txt'
}

export default HelloWorld
