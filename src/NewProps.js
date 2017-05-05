import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      increasing: false
    }
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root')
    )

  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps)
    this.setState({
      increasing: nextProps.val > this.props.val
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0
  }
  render() {
    console.log('render', this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        props.val: {this.props.val} |
        state.increasing: {this.state.increasing}
      </button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
  componentDidMount() {
    console.log('componentDidMount', ReactDOM.findDOMNode(this))
  }
  componentWillUnmount() {
    console.log('componentUnmount')
  }
}

App.defaultProps = {
  val: 0
}

export default App
