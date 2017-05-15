import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './OperationButtons.scss'

export class RightShiftButton extends Component {

  static propTypes = {
    onClick : PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(playerNumber => ((playerNumber >> 1) & 255))
  }

  render() {
    return(
      <button className={style['operation-button']} onClick={this.handleClick}>
        &gt;&gt;
      </button>
    )
  }
}