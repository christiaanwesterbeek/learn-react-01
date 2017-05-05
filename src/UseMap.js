import React, { Component } from 'react'

class UseMap extends Component {
  constructor() {
    super()

    this.state = {
      items: []
    }
  }
  filter( e ) {
    this.setState({
      filter: e.target.value
    })
  }
  componentWillMount() {
    fetch( 'http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => {
        console.log('here', items)
        this.setState({items})
      })
  }
  render() {
    let items = this.state.items

    if (this.state.filter) {
      items = items.filter(item =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase())
      )
    }

    return (
      <div>
        <input onChange={this.filter.bind(this)} />

        {
          items.map(item =>
            <Person key={item.name} person={item} />
          )
        }
      </div>
    )
  }
}

const Person = (props) => <h2>{props.person.name}x</h2>

export default UseMap
