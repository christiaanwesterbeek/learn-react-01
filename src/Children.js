import React, { Component} from 'react'

class App extends Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }

}

class Parent extends Component {
  render() {
    let items = React.Children.map(this.props.children, child => child)
    // let items = React.Children.toArray(this.props.children)
    // let items = React.Children
    //   .forEach(this.props.children, child => console.log(child.props.className))
    // let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App
