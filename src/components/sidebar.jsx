import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReportHeader from './report-header';
import ReportList from './report-list';
import {loadReports, sortReports} from '../actions';

class Sidebar extends Component {
  componentWillMount() {
    this.props.loadReports();
  }

  render() {
    if (!this.props.showSidebar) {
      return <div/>;
    }

    return (
      <div className="sidebar">
        <ReportHeader/>
        <ReportList/>
      </div>
    );
  }
}
Sidebar.propTypes = {
  loadReports: React.PropTypes.func.isRequired,
  showSidebar: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {showSidebar: state.showSidebar};
}

export default connect(mapStateToProps, {loadReports, sortReports})(Sidebar);
