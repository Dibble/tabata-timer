import React, { Component } from 'react'

const padStart = (number, length) => {
  let paddedNumber = number + ''

  while (paddedNumber.length < length) {
    paddedNumber = '0' + paddedNumber
  }

  return paddedNumber
}

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = { currentTime: props.currentTime, endTime: props.endTime }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps)
  }

  render () {
    let timeLeft = (this.state.endTime - new Date().getTime()) / 1000.0
    let minutes = (timeLeft / 60).toFixed(0)
    let seconds = (timeLeft % 60).toFixed(3)

    return (<div>{this.state.endTime !== null ? `${padStart(minutes, 2)}:${padStart(seconds, 5)}` : '00:00.000'}</div>)
  }
}

export default Timer
