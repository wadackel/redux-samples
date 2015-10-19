import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute} from "react-router"
// import createHashHistory from "history/lib/createHashHistory"
import {Provider} from "react-redux"
import App from "./containers/App"
import Index from "./components/pages/Index"
import About from "./components/pages/About"
import Search from "./components/pages/Search"
import Trending from "./components/pages/Trending"

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="search" component={Search} />
      <Route path="trending" component={Trending} />
      <IndexRoute component={Index} />
    </Route>
  </Router>,
  document.getElementById("app")
);

// import configureStore from "./store/configureStore"
//
//
// const store = configureStore();
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );