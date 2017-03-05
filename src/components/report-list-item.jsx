import React, {Component} from 'react';
import moment from 'moment';

export default class ReportListItem extends Component {
  render() {
    return (
      <li className="list-group-item report-list-item">
        <div className="row">
          <span className="col-xs-7">
            <p className="list-group-item-heading cut-text" title={this.props.report.name}>
              {this.props.report.name}
            </p>
          </span>
          <span className="col-xs-5 text-center">
            <p className="list-group-item-text">
              {moment.unix(this.props.report.updated).format('MMM DD')}
            </p>
          </span>
        </div>
        <div className="row">
          <span className="col-xs-7">
            <p className="list-group-item-text cut-text secondary-header inline">
              {this.props.report.type}
              &nbsp;
            </p>
            <span
              className="glyphicon glyphicon glyphicon-map-marker inline secondary-header"
              aria-hidden="true"/>
            <p className="list-group-item-text cut-text secondary-header inline">
              &nbsp; {this.props.report.location}
            </p>
          </span>
          <span className="col-xs-5 text-center">
            <p className="list-group-item-text">
              {moment.unix(this.props.report.updated).format('h:mm A')}
            </p>
          </span>
        </div>
      </li>
    );
  }
}
ReportListItem.propTypes = {
  report: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    created: React.PropTypes.number,
    updated: React.PropTypes.number,
    location: React.PropTypes.string,
    type: React.PropTypes.string
  })
};
ReportListItem.defaultProps = {
  report: {}
};
