import React, {Component, PropTypes} from "react"
import {zeroPadding} from "../utils/strings"


export default class Clock extends Component {
  render() {
    let {hour, minutes, seconds} = this.props;
    hour = zeroPadding(hour, 2);
    minutes = zeroPadding(minutes, 2);
    seconds = zeroPadding(seconds, 2);

    const styles = {
      backgroundColor: `#${hour}${minutes}${seconds}`
    };

    return (
      <div className="clock" style={styles}>
        <div className="clock__time">
          {hour}:{minutes}:{seconds}
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  hour: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};