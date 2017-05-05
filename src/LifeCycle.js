import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class LifeCycle extends Component {
  constructor() {
    super()

    this.state = {
      val: 0
    }
    console.log('')
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
    console.log('componentWillMount', this, arguments)
  }
  render() {
    console.log('render', this, arguments)
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
  componentDidMount() {
    console.log('componentDidMount', this, arguments)
  }
  componentWillUnmount() {
    console.log('componentUnmount', this, arguments)
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<LifeCycle />,  document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
