import React, {Component, PropTypes} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contents">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}




// import React, {Component, PropTypes} from "react"
// import {bindActionCreators} from "redux"
// import {connect} from "react-redux"
// import * as githubActions from "../actions/github"
// import User from "../components/User"
// import UserForm from "../components/UserForm"
// import StarRepositories from "../components/StarRepositories"
//
//
// class App extends Component {
//   componentDidMount() {
//     this.props.fetchUser(DEFAULT_USER);
//   }
//
//   render() {
//     const {github, fetchUser} = this.props;
//     return (
//       <div>
//         <User user={github.user} />
//         <UserForm
//           defaultUserName={DEFAULT_USER}
//           onUserNameSubmit={(userName) => fetchUser(userName)} />
//         <StarRepositories stargazers={github.stargazers} />
//       </div>
//     );
//   }
// }
//
//
// export default connect(
//   state => ({github: state.github}),
//   dispatch => bindActionCreators(githubActions, dispatch)
// )(App);