import React, {Component, PropTypes} from "react"
import PageHeader from "../PageHeader"


export default class Index extends Component {
  render() {
    return (
      <div>
        <PageHeader
          icon="dashboard"
          title="HOME" />
      </div>
    );
  }
}