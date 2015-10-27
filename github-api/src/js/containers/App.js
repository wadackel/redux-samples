import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="contents">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}