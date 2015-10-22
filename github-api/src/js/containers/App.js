import React, {Component, PropTypes} from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


import fetch from "isomorphic-fetch"

function checkStatus(res) {
  if( res.status >= 200 && res.status < 300 ){
    return res;
  }else{
    let error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
}

function parseJSON(res) {
  return res.json();
}

// fetch("https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc")
//   .then(checkStatus)
//   .then(parseJSON)
//   .then((res) => {
//     // console.log(res.items);
//     console.log(JSON.stringify(res.items.slice(0, 10)));
//   })
//   .catch((err) => {
//     console.error(err);
//   });

export default class App extends Component {
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