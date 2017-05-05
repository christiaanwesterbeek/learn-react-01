import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  constructor() {
    super()

    this.state = {
      txt: 'this is the state text'
    }
  }
  update( e ) {
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <div>state x {this.state.txt}</div>
      </div>
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
