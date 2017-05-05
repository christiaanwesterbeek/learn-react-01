import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <ButtonWidget>I <Heart /> React</ButtonWidget>
    )
  }
}

const ButtonWidget = (props) => <button>{props.children}</button>

class Heart extends Component {
  render() {
    return (
      <span>&hearts;</span>
    )
  }
}

export default Button
