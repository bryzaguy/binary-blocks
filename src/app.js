import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {GameContainer} from './GameContainer.jsx'
import style from './app.scss'

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <GameContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('bindary-blocks'))
