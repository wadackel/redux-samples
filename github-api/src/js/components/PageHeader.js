import React, {Component, PropTypes} from "react"


export default class PageHeader extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const iconClass = `page-header__icon fa fa-${this.props.icon}`;
    return (
      <div className="page-header">
        <i className={iconClass}></i>
        <h2 className="page-header__title">{this.props.title}</h2>
      </div>
    );
  }
}