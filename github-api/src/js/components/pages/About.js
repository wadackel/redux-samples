import React, {Component, PropTypes} from "react"
import PageHeader from "../PageHeader"


export default class About extends Component {
  render() {
    return (
      <div>
        <PageHeader
          icon="question"
          title="ABOUT" />
      </div>
    );
  }
}