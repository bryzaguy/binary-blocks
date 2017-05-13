import React, {Component} from 'react'
import {ZeroBlock, OneBlock} from './Block.jsx'
import style from './BlockRow.scss'

export class BlockRow extends Component {
  render () {
    const {number} = this.props
    return (
      <div className={style.container}>
        <ZeroBlock />
        <ZeroBlock />
        <ZeroBlock />
        <OneBlock />
        <ZeroBlock />
        <ZeroBlock />
        <OneBlock />
        <ZeroBlock />
      </div>
    )
  }
}