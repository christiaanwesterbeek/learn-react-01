import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  constructor() {
    super()

    this.state = {
      x: 1,
      y: 2
    }
  }
  update( e ) {
    this.setState({
      x: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <div>state x {this.state.x}</div>
        <div>state y {this.state.y}</div>
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
