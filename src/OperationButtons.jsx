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