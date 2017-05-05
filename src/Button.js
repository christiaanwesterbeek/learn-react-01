import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <ButtonWidget>I <Heart /> React</ButtonWidget>
    )
  }
}

const ButtonWidget = (props) => <button>{props.children}</button>


export class Heart extends Component {
  render() {
    return (
      <span>&hearts;</span>
    )
  }
}

export default Button
