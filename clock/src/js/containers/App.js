import React, {Component, PropTypes} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as ClockActions from "../actions/clock"
import Clock from "../components/Clock"


class App extends Component {
  componentDidMount() {
    this.timer = setInterval(this.props.syncDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {hour, minutes, seconds} = this.props.time;
    return (
      <div>
        <h1>Redux Clock</h1>
        <Clock
          hour={hour}
          minutes={minutes}
          seconds={seconds} />
      </div>
    );
  }
}

App.propTypes = {
  syncDate: PropTypes.func.isRequired,
  time: PropTypes.shape({
    hour: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
  })
};


export default connect(
  state => ({time: state.clock}),
  dispatch => bindActionCreators(ClockActions, dispatch)
)(App);