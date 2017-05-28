import React from 'react';
import './page_header.scss';

export default class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};
