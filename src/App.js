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
        <div>state x {this.state.txt}</div>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
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

const Widget = (props) => (
  <input type="text" onChange={props.update.bind(this)} />
)

export default HelloWorld
