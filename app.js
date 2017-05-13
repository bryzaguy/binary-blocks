import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {GameContainer} from './src/GameContainer.jsx'

class App extends Component {
  render() {
    const style = {display: 'flex', justifyContent: 'space-around'}
    return <div style={style}><GameContainer /></div>
  }
}

ReactDOM.render(<App />, document.getElementById('bindary-blocks'))
