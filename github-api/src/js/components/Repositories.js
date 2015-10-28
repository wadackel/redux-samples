import React, {Component, PropTypes} from "react"
import Repository from "./Repository"
import Loader from "./Loader"


export default class Repositories extends Component {
  static propTypes = {
    repositories: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className="repositories">
        {this.props.repositories.map((repository, i) => <Repository key={i} {...repository} />)}
        <Loader hidden={!this.props.isFetching} />
      </div>
    );
  }
}