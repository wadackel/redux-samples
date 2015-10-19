import React, {Component, PropTypes} from "react"


export default class StarRepositories extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">StarRepositories.js</div>
    );
  }
}
//
// StarRepositories.propTypes = {
//   stargazers: PropTypes.array.isRequired
// };