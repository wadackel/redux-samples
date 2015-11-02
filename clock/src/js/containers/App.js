import React, {Component, PropTypes} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as ClockActions from "../actions/clock"
import Clock from "../components/Clock"


@connect(
  state => ({time: state.clock}),
  dispatch => bindActionCreators(ClockActions, dispatch)
)
export default class App extends Component {
  static propTypes = {
    syncDate: PropTypes.func.isRequired,
    time: PropTypes.shape({
      hour: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired
    })
  };

  componentDidMount() {
    this.timer = setInterval(this.props.syncDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Redux Clock</h1>
        <Clock {...this.props.time} />
        <p className="inspire">inspired by <a href="http://whatcolourisit.scn9a.org/">What colour is it?</a></p>
      </div>
    );
  }
}