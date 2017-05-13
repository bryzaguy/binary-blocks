import React, {Component} from 'react'
import {BlockRow} from './BlockRow.jsx'
import style from './GameContainer.scss'

export class GameContainer extends Component {
  render () {
    return (
      <div className={style.container}>
        <BlockRow number={29} />
      </div>
    )
  }
}
