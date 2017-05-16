import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Button} from './Button.jsx'

const handleAnd = (playerNumber, opNumber) => (playerNumber & opNumber) & 255
const handleNot = playerNumber => ~playerNumber & 255
const handleOr = (playerNumber, opNumber) => (playerNumber | opNumber) & 255
const handleLeftShift = playerNumber => (playerNumber << 1) & 255
const handleRightShift = playerNumber => (playerNumber >> 1) & 255
const handleXor = (playerNumber, opNumber) => (playerNumber ^ opNumber) & 255

export class OperationButtons extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const {onChange, onSubmit} = this.props
    switch (e.key) {
      case 'Enter':
        onSubmit()
        break
      case 'ArrowRight':
        onChange(handleRightShift)
        break
      case 'ArrowLeft':
        onChange(handleLeftShift)
        break
      case 'ArrowUp':
        onChange(handleNot)
        break
      case 'a':
        onChange(handleAnd)
        break
      case 's':
        onChange(handleOr)
        break
      case 'd':
        onChange(handleXor)
        break
    }
  }

  render() {
    const {onChange, onSubmit} = this.props
    return (
      <div>
        <Button onClick={() => onChange(handleNot)}>~</Button>
        <Button onClick={() => onChange(handleAnd)}>&amp;</Button>
        <Button onClick={() => onChange(handleOr)}>|</Button>
        <Button onClick={() => onChange(handleXor)}>^</Button>
        <Button onClick={() => onChange(handleLeftShift)}>&lt;&lt;</Button>
        <Button onClick={() => onChange(handleRightShift)}>&gt;&gt;</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    )
  }
}