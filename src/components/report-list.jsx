import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReportListItem from './report-list-item';

class ReportList extends Component {
  render() {
    if (this.props.reportsAmount === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (this.props.visibleReports.length === 0) {
      return (
        <div>
          No Search Results
        </div>
      );
    }

    return (
      <ul className="list-group report-list">
        {this.props.visibleReports.map((report) => {
          return (<ReportListItem key={report.id} report={report}/>);
        })}
      </ul>
    );
  }
}
ReportList.propTypes = {
  visibleReports: React.PropTypes.arrayOf(Object),
  reportsAmount: React.PropTypes.number
};
ReportList.defaultProps = {
  visibleReports: [],
  reportsAmount: 0
};

function mapStateToProps(state) {
  return {visibleReports: state.visibleReports, reportsAmount: state.reportsAmount};
}

export default connect(mapStateToProps)(ReportList);
