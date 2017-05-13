import React, {Component} from 'react'
import style from './Block.scss'

export class ZeroBlock extends Component {
  render() {
    return <div className={style.container}>0</div>
  }
}

export class OneBlock extends Component {
  render() {
    return <div className={style.container}>1</div>
  }
}