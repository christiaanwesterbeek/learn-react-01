import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'

ReactDOM.render(
  <HelloWorld txt="val" cat={5} />,
  document.getElementById('root')
)
