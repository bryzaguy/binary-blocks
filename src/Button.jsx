import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './Button.scss'

export class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  
  render() {
    const {onClick, children} = this.props
    return (
      <button className={style.button} onClick={onClick}>
        {children}
      </button>
    )
  }
}