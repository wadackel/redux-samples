import React, {Component, PropTypes} from "react"
import TrendingListItem from "./TrendingListItem"


export default class TrendingItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    repositories: PropTypes.array.isRequired
  };

  render() {
    const {title, repositories} = this.props;

    return (
      <div className="trendings__item trending">
        <div className="trending__inner">
          <h3 className="trending__title">{title}</h3>
          <ul className="trending__list">
            {repositories.map((repository, i) => <TrendingListItem key={i} {...repository} />)}
          </ul>
        </div>
      </div>
    );
  }
}