import React, {Component, PropTypes} from "react"


const GITHUB_LINK = "https://github.com/tsuyoshiwada/";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="copyright">Copyright &copy; 2015 <a href={GITHUB_LINK} target="_blank">tsuyoshiwada</a> All Right Reserved.</p>
      </div>
    );
  }
}