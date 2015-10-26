import React, {Component, PropTypes} from "react"


export default class TrendingListItem extends Component {
  static propTypes = {
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired
    }).isRequired,
    stargazers_count: PropTypes.number.isRequired
  };

  render() {
    const {
      full_name,
      html_url,
      owner: {
        avatar_url
      },
      stargazers_count
    } = this.props;

    return (
      <li className="trending__list__item repository--sm">
        <a className="repository--sm__link" href={html_url} target="_blank">
          <div className="repository--sm__avatar">
            <img src={avatar_url} />
          </div>
          <h4 className="repository--sm__title">{full_name}</h4>
          <p className="repository--sm__meta">
            <i className="fa fa-heart"></i> {stargazers_count}
          </p>
        </a>
      </li>
    );
  }
}