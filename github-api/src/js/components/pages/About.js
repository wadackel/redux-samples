import React, {Component, PropTypes} from "react"
import PageHeader from "../PageHeader"


export default class About extends Component {
  render() {
    return (
      <div className="page--about">
        <PageHeader
          icon="question"
          title="ABOUT" />
        <p>
          Github : <a href="https://github.com/tsuyoshiwada/">tsuyoshiwada</a><br />
          Twitter : <a href="https://twitter.com/vandalTsuyoshi">vandalTsuyoshi</a><br />
          <a href="https://github.com/tsuyoshiwada/redux-samples/tree/gh-pages/github-api">Source on Github</a>
        </p>
        <h3>Main Libraries</h3>
        <ul>
          <li><a href="https://github.com/facebook/react">react</a></li>
          <li><a href="https://github.com/rackt/redux">redux</a></li>
          <li><a href="https://github.com/rackt/redux-router">redux-router</a></li>
        </ul>
      </div>
    );
  }
}