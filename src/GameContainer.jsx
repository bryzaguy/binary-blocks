import React, {Component} from 'react'

import {BlockRow} from './BlockRow.jsx'
import {Timer} from './Timer.jsx'
import style from './GameContainer.scss'

const getNumber = () => Math.ceil(Math.random() * 256)

export class GameContainer extends Component {
  state = {
    playerNumber: getNumber(),
    enemyNumbers: [getNumber()]
  }

  handleTimerComplete = () => {
    const {enemyNumbers: previous} = this.state
    if (previous.length === 10) {
      this.setState({gameOver: true})
    } else {
      const enemyNumbers = [getNumber()].concat(previous)
      this.setState({enemyNumbers})
    }
  }

  render () {
    const {playerNumber, enemyNumbers, gameOver} = this.state
    const top = gameOver ? (
      <div className={style.over}>GAME OVER</div>
    ) : (
      <Timer onComplete={this.handleTimerComplete} />
    )
    return (
      <div className={style.container}>
        {top}
        <BlockRow number={playerNumber} />
        {enemyNumbers.map((n, i) => <BlockRow key={i} number={n} />)}
      </div>
    )
  }
}
