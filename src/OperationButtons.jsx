import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './OperationButtons.scss'

import {ZeroButton} from './ZeroButton.jsx'
import {OneButton} from './OneButton.jsx'
import {ANDButton} from './ANDButton.jsx'
import {ORButton} from './ORButton.jsx'
import {XORButton} from './XORButton.jsx'
import {NOTButton} from './NOTButton.jsx'
import {LeftShiftButton} from './LeftShiftButton.jsx'
import {RightShiftButton} from './RightShiftButton.jsx'

export class OperationButtons extends Component {

  static propTypes = {
    onChange         : PropTypes.func.isRequired,
    onChangeOpNumber : PropTypes.func.isRequired
  }

  handleClick = operation => {
    this.props.onChange(operation)
  }

  render() {
    return(
      <div className={style['operation-buttons']}>
        <ZeroButton
        onClick={this.props.onChangeOpNumber} />
        <OneButton
        onClick={this.props.onChangeOpNumber} />
        <ANDButton
        onClick={this.handleClick} />
        <ORButton
        onClick={this.handleClick} />
        <XORButton
        onClick={this.handleClick} />
        <NOTButton
        onClick={this.handleClick} />
        <LeftShiftButton
        onClick={this.handleClick} />
        <RightShiftButton
        onClick={this.handleClick} />
      </div>
    )
  }
}