import React, {Component, PropTypes} from "react"


export default class SearchForm extends Component {
  static propTypes = {
    onSubmitKeyword: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group input-group--search">
              <input type="text" ref="keyword" className="input-group__control" placeholder="Keyword" />
              <div className="input-group__btn input-group__btn--search">
                <button className="btn--primary"><i className="fa fa-search"></i></button>
              </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitKeyword(this.refs.keyword.value.trim());
  }
}