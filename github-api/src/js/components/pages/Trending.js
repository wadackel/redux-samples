import React, {Component, PropTypes} from "react"
import PageHeader from "../PageHeader"


export default class Trending extends Component {
  render() {
    return (
      <div>
        <PageHeader
          icon="line-chart"
          title="TRENDING" />
      </div>
    );
  }
}