import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './OperationButtons.scss'

export class OneButton extends Component {

  static propTypes = {
    onClick : PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(1)
  }

  render() {
    return(
      <button className={style['operation-button']} onClick={this.handleClick}>
        1
      </button>
    )
  }
}