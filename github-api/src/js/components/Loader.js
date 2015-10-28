import React, {Component, PropTypes} from "react"
import classNames from "classnames"


export default class Loader extends Component {
  static propTypes = {
    hidden: PropTypes.bool
  };

  static defaultProps = {
    hidden: false
  };

  render() {
    const classes = classNames({
      "loader": true,
      "loader--hidden": this.props.hidden
    });

    return (
      <div className={classes}>
        <span className="loader__inner"></span>
      </div>
    );
  }
}