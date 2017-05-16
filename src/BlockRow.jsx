import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ZeroBlock, OneBlock} from './Block.jsx'
import style from './BlockRow.scss'
import classNames from 'classnames'

const BIN_LENGTH = 8;

export class BlockRow extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    isPlayerNumber : PropTypes.bool,
    number         : PropTypes.number.isRequired
  }

  convertToBinaryArr() {
    const {number} = this.props
    const binArr = number.toString(2).split("")
    const padLength = BIN_LENGTH - (binArr.length - 1)
    const padding = Array(padLength).join("0").split("")
    return padding.concat(binArr);
  }

  render () {
    const binArr = this.convertToBinaryArr()
    // Added conditional class for player number to differentiate it
    const classObj = {}
    classObj[style["player-number"]] = this.props.isPlayerNumber
    const classes = classNames(style.container,classObj)
    return (
      <div className={classes}>
        {binArr.map((bit, index) =>
          +bit ? <OneBlock key={index} /> : <ZeroBlock key={index} />
        )}
      </div>
    )
  }
}