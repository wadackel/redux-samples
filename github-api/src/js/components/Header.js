import React, {Component, PropTypes} from "react"
import {Link} from "react-router"


const GITHUB_REPOSITORY = "https://github.com/tsuyoshiwada/redux-samples";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__logo"><Link to="/"><i className="fa fa-github-alt"></i></Link></h1>
        <ul className="gnav">
          <li className="gnav__item"><Link to="/about/">ABOUT</Link></li>
          <li className="gnav__item"><Link to="/search/">SEARCH</Link></li>
          <li className="gnav__item"><Link to="/trending/">TRENDING</Link></li>
          <li className="gnav__item"><a href={GITHUB_REPOSITORY} target="_blank">FORK ME</a></li>
        </ul>
      </div>
    );
  }
}