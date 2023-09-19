import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  //   here the accelerate button functionality added

  onAccelerate = () => {
    this.setState(prevState => {
      console.log('this is an array')
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return {count: prevState.count}
    })
  }

  //   here the Break button functionality added

  onApplyBreak = () => {
    this.setState(prevState => {
      console.log('This is break button')
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return {count: prevState.count}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading"> SPEEDOMETER</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
            className="image-size"
          />
        </div>
        <h3 className="main-heading">
          Speed is <span>{count}</span>mph
        </h3>
        <p className="para"> Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="accelerate-button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="break-button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
