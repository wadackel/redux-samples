import React, {Component, PropTypes} from "react"
import ReactDOM from "react-dom"
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {Provider, connect} from "react-redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import createHashHistory from "history/lib/createHashHistory"
import {Router, Route, Link} from "react-router"
import {ReduxRouter, reduxReactRouter, routerStateReducer, pushState} from "redux-router"
import * as actions from "./actions"


const reducer = combineReducers({
  router: routerStateReducer,
  counter(state=0, action) {
    switch( action.type ){
      case "INCREMENT": return state + 1;
      case "DECREMENT": return state - 1;
      default: return state;
    }
  }
});

const store = compose(
  applyMiddleware(thunk, logger()),
  reduxReactRouter({
    createHistory: createHashHistory
  })
)(createStore)(reducer);





class PageA extends Component {
  render() {
    return (
      <div>
        <h2>PageA</h2>
      </div>
    );
  }
}


class PageB extends Component {
  render() {
    return (
      <div>
        <h2>PageB</h2>
        <div>{this.props.counter}</div>
        <button type="button" onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

PageB = connect(
  state => ({counter: state.counter}),
  {pushState, ...actions}
)(PageB);


class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <h1>App Container</h1>
        <ul>
          <li><Link to="/page-a">PageA</Link></li>
          <li><Link to="/page-b">PageB</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


App = connect(
  state => ({
    counter: state.counter,
    q: state.router.location.query.q
  }),
  {pushState, ...actions}
)(App);



ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <Route path="page-a" component={PageA} />
        <Route path="page-b" component={PageB} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById("app")
);