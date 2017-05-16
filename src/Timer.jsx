import React, {Component} from 'react'
import PropTypes from 'prop-types'

import style from './Timer.scss'
const {background, bar} = style
const TICK_LENGTH = 0.25

export class Timer extends Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
    onComplete: PropTypes.func.isRequired
  }

  static defaultProps = {
    length: 15
  }

  state = {
    progress: 0
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, TICK_LENGTH * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  reset = () => {
    this.setState({progress: 0})
  }

  tick = () => {
    const {onComplete, length} = this.props
    const {progress: prevProgress} = this.state
    const progress = prevProgress + TICK_LENGTH
    if (progress > length) {
      this.setState({progress: 0}, onComplete)
    } else {
      this.setState({progress})
    }
  }

  render () {
    const {progress} = this.state
    const {length} = this.props
    const progressStyle = {
      transform: `scaleX(${progress / length})`
    }

    return (
      <div className={background}>
        <div className={bar} style={progressStyle} />
      </div>
    )
  }
}
