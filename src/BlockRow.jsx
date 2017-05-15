import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ZeroBlock, OneBlock} from './Block.jsx'
import style from './BlockRow.scss'

const BIN_LENGTH = 8;

export class BlockRow extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    number : PropTypes.number.isRequired
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
    return (
      <div className={style.container}>
        {binArr.map((bit, index) =>
          +bit ? <OneBlock key={index} /> : <ZeroBlock key={index} />
        )}
      </div>
    )
  }
}