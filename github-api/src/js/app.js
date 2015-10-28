import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {Route, IndexRoute} from "react-router"
import {ReduxRouter} from "redux-router"
import App from "./containers/App"
import Index from "./components/pages/Index"
import About from "./components/pages/About"
import Search from "./components/pages/Search"
import Trending from "./components/pages/Trending"
import configureStore from "./store/configureStore"


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="search">
          <Route path=":page" component={Search}>
            <Route path=":keyword" component={Search} />
          </Route>
          <IndexRoute component={Search} />
        </Route>
        <Route path="trending" component={Trending} />
        <IndexRoute component={Index} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById("app")
);