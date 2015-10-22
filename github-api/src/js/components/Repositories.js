import React, {Component, PropTypes} from "react"
import Repository from "./Repository"
import Loader from "./Loader"


export default class Repositories extends Component {
  render() {
    return (
      <div className="repositories">
        {this.props.repositories.map((repository, i) => <Repository key={i} {...repository} />)}
        <Loader hidden={false} />
      </div>
    );
  }
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired
};