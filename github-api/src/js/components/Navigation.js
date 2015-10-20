import React, {Component, PropTypes} from "react"
import {Link} from "react-router"


const GITHUB_REPOSITORY = "https://github.com/tsuyoshiwada/redux-samples";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <h1 className="navigation__logo"><Link to="/"><i className="fa fa-github-alt"></i></Link></h1>
        <ul className="navigation__menu">
          <li className="navigation__item"><Link to="/about/"><i className="fa fa-question"></i><span>ABOUT</span></Link></li>
          <li className="navigation__item"><Link to="/search/"><i className="fa fa-search"></i><span>SEARCH</span></Link></li>
          <li className="navigation__item"><Link to="/trending/"><i className="fa fa-line-chart"></i><span>TRENDING</span></Link></li>
          <li className="navigation__item"><a href={GITHUB_REPOSITORY} target="_blank"><i className="fa fa-github"></i><span>FORK ME</span></a></li>
        </ul>
      </div>
    );
  }
}