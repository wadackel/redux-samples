import React, {Component, PropTypes} from "react"
import PageHeader from "../PageHeader"


export default class Index extends Component {
  render() {
    return (
      <div className="page--index">
        <PageHeader
          icon="dashboard"
          title="HOME" />
        <p>This web site is a sample application that uses <a href="https://github.com/rackt/redux">redux</a> and <a href="https://github.com/rackt/redux-router">redux-router</a>.</p>
        <p>You can see the search and programing language trend of the repository.</p>
      </div>
    );
  }
}