import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './OperationButtons.scss'

export class ANDButton extends Component {

  static propTypes = {
    onClick : PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick((playerNumber, opNumber) => ((playerNumber & opNumber) & 255))
  }

  render() {
    return(
      <button className={style['operation-button']} onClick={this.handleClick}>
        &amp;
      </button>
    )
  }
}