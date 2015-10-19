import React, {Component, PropTypes} from "react"


export default class User extends Component {
  render() {
    const {isFetching, data} = this.props.user;
    const {
      avatar_url,
      name,
      followers,
      following
    } = data;

    if( isFetching ){
      return (
        <div className="user">Loading...</div>
      );
    }

    return (
      <div className="user">
        <div className="user__media">
          <img className="user__media__object" src={avatar_url} />
        </div>
        <h2 className="user__name">{name}</h2>
        <dl className="user__info">
          <dt className="user__info__label">Followers</dt>
          <dd className="user__info__value">{followers}</dd>
        </dl>
        <dl className="user__info">
          <dt className="user__info__label">Following</dt>
          <dd className="user__info__value">{following}</dd>
        </dl>
      </div>
    );
  }
}

// User.propTypes = {
//   user: PropTypes.shape({
//     isFetching: PropTypes.bool.isRequired,
//     data: PropTypes.object.isRequired
//   }).isRequired
// };