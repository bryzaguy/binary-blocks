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

  handleTimerComplete = () => {
    const {enemyNumbers: previous, playerNumber} = this.state
    if (previous.length === 10) {
      this.setState({gameOver: true})
    } else if(playerNumber === previous[0]) {
      // If they match, remove the first element
      // If there is only one element, get a new number
      let enemyNumbers;
      previous.splice(0, 1)
      if(previous.length === 1) {
        enemyNumbers = [getNumber()]
      } else {
        enemyNumbers = previous
      }
      this.setState({enemyNumbers})
    } else {
      const enemyNumbers = [getNumber()].concat(previous)
      this.setState({enemyNumbers})
    }
  }

  // Sets the number to be used by AND, OR, and XOR
  setOpNumber = opNumber => {
    this.setState({
      opNumber
    })
  }

  // Takes a function sent by operation button and operates on playerNumber
  handleNumberChange = operation => {
    const {enemyNumbers, opNumber, playerNumber} = this.state;
    const newNumber = operation(playerNumber, opNumber)
    this.setState ({
      playerNumber: newNumber,
      enemyNumbers
    })
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
        <BlockRow
        isPlayerNumber={true}
        number={playerNumber} />
        {enemyNumbers.map((n, i) => <BlockRow key={i} number={n} />)}
        <OperationButtons
        onChange={this.handleNumberChange}
        onChangeOpNumber={this.setOpNumber} />
      </div>
    )
  }
}
