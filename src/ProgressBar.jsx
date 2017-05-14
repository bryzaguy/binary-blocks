import React, {Component, PropTypes} from 'react'
import style from './ProgressBar.scss'

class ProgressBar extends Component {
  
  static propTypes = {
    duration : PropTypes.number.isRequired
  }

  render() {
    return (
      <div className={style['progress-bar']}>
      </div>
    )
  }
}

export default ProgressBar;
