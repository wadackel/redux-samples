import React, {Component, PropTypes} from "react"
import moment from "moment"


const today = moment();


export default class Repository extends Component {
  render() {
    const {
      updated_at,
      forks_count,
      full_name,
      description,
      html_url,
      language,
      name,
      owner,
      score,
      stargazers_count,
      watchers_count
    } = this.props;

    const updatedLabel = moment(updated_at, "YYYY-MM-DD HH:mm:ss").fromNow();

    return (
      <div className="repository">
        <div className="repository__inner">
          <div className="repository__avatar"><img src={owner.avatar_url} /></div>
          <div className="repository__body">
            <h3 className="repository__title"><a href={html_url} target="_blank">{full_name}</a></h3>
            <p className="repository__description">{description}</p>
            <ul className="repository__info">
              <li className="repository__info__item"><i className="fa fa-star"></i> {stargazers_count}</li>
              <li className="repository__info__item"><i className="fa fa-code-fork"></i> {forks_count}</li>
              <li className="repository__info__item"><i className="fa fa-language"></i> {language}</li>
            </ul>
            <p className="repository__date"><i className="fa fa-refresh"></i> {updatedLabel}</p>
          </div>
        </div>
      </div>
    );
  }
}

Repository.propTypes = {
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  forks_count: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  }).isRequired,
  score: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number.isRequired
};