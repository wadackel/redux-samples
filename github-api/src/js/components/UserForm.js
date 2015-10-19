import React, {Component, PropTypes} from "react"


export default class UserForm extends Component {
  render() {
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input className="form-control" type="text" ref="userName" defaultValue={this.props.defaultUserName} />
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">Search!!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value.trim();
    this.props.onUserNameSubmit(userName);
  }
}

UserForm.propTypes = {
  onUserNameSubmit: PropTypes.func.isRequired,
  defaultUserName: PropTypes.string.isRequired
};