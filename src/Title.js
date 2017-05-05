import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Title extends Component {
  render() {
    return (
      <TitleWidget text="xxxssss" />
    )
  }
}

const TitleWidget = (props) => <h1>Title: {props.text}</h1>

TitleWidget.propTypes = {
  text(props, propName, component){
    console.log('text', arguments)
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

export default Title
