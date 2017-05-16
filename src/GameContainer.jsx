import React, {Component} from 'react'

import {BlockRow} from './BlockRow.jsx'
import {Timer} from './Timer.jsx'
import {OperationButtons} from './OperationButtons.jsx'
import style from './GameContainer.scss'

const getNumber = () => Math.ceil(Math.random() * 256)

export class GameContainer extends Component {
  state = {
    playerNumber: getNumber(),
    enemyNumbers: [getNumber()],
    opNumber: null
  }

  roundComplete = () => {
    const {enemyNumbers: currentNumbers, playerNumber} = this.state
    
    const hasMatch = playerNumber === currentNumbers[0]
    const enemyNumbers = hasMatch ?
      currentNumbers.slice(1) :
      [getNumber()].concat(currentNumbers)
    
    if (enemyNumbers.length > 10) {
      this.setState({gameOver: true})
    } else {
      this.setState({enemyNumbers})
    }
  }

  // Sets the number to be used by AND, OR, and XOR
  setOpNumber = opNumber => {
    this.setState({
      opNumber
    })
  }

  handleSubmit = () => {
    this.timer.reset()
    this.roundComplete()
  }

  // Takes a function sent by operation button and operates on playerNumber
  handleNumberChange = operation => {
    const {playerNumber} = this.state;

    this.setState ({
      playerNumber: operation(playerNumber, 1)
    })
  }

  timerRef = elem => {
    this.timer = elem
  }

  render () {
    const {playerNumber, enemyNumbers, gameOver} = this.state
    const top = gameOver ? (
      <div className={style.over}>GAME OVER</div>
    ) : (
      <Timer onComplete={this.roundComplete} ref={this.timerRef} />
    )
    
    return (
      <div className={style.container}>
        {top}
        <BlockRow isPlayerNumber number={playerNumber} />
        {enemyNumbers.map((n, i) => (
          <BlockRow key={i} number={n} />
        ))}
        <OperationButtons 
          onChange={this.handleNumberChange} 
          onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
