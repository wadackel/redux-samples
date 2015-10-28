import React, {Component, PropTypes} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as githubActions from "../../actions/github"
import PageHeader from "../PageHeader"
import Repositories from "../Repositories"
import SearchForm from "../SearchForm"


class Search extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired
  };

  componentDidMount() {
    if( navigator.userAgent.indexOf("WebKit") < 0 ){
      this.scrollable = document.documentElement;
    }else{
      this.scrollable = document.body;
    }
    window.addEventListener("scroll", this.handleScroll.bind(this), false);

    const {
      params: {page},
      query: {keyword}
    } = this.props;

    if( !!keyword ){
      this.props.fetchSearch(keyword, page || 1);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this), false);
  }

  render() {
    const {
      search: {
        isFetching,
        repositories
      },
      query: {
        keyword
      }
    } = this.props;

    return (
      <div>
        <PageHeader
          icon="search"
          title="SEARCH" />
        <SearchForm
          defaultValue={keyword}
          onSubmitKeyword={this.handleSubmitKeyword.bind(this)} />
        <Repositories
          repositories={repositories}
          isFetching={isFetching} />
      </div>
    );
  }

  handleSubmitKeyword(keyword) {
    this.searchKeyword(keyword);
  }

  handleScroll(e) {
    const {scrollTop, scrollHeight} = this.scrollable;
    const {clientHeight} = document.body;

    if( scrollHeight - clientHeight - scrollTop <= 200 ){
      if( !this.props.search.isFetching ){
        // @TODO next page
        // this.searchKeyword(this.props.query.keyword);
      }
    }
  }

  searchKeyword(keyword) {
    const nextPage = this.props.search.pagination.current + 1;
    this.props.fetchSearch(keyword, nextPage);
    this.props.history.pushState(null, `/search/${nextPage}/`, {keyword});
  }
}

export default connect(
  state => ({
    search: state.github.search,
    query: state.router.location.query
  }),
  dispatch => bindActionCreators(githubActions, dispatch)
)(Search);