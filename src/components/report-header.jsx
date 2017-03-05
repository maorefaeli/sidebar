import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadReports, toggleSidebarVisibility, sortReports, filterReports} from '../actions';

class ReportHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({term});
    this.props.filterReports(term);
  }

  render() {
    return (
      <div className="report-header">
        <div className="main-header">
          <div className="row">
            <span className="col-xs-8">
              <h4 className="h4">Reports {this.props.reportsAmount}</h4>
            </span>
            <button className="col-xs-2 btn btn-default no-border" onClick={this.props.loadReports}>
              <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
            </button>
            <buton className="col-xs-2 btn btn-default no-border" onClick={this.props.toggleSidebarVisibility}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
            </buton>
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={this.onInputChange}
                value={this.state.term}
                placeholder="search reports"/>
              <div className="input-group-addon">
                <button
                  className="btn btn-default btn-xs no-border"
                  onClick={() => this.props.sortReports()}
                  title="Sort Ascending/Descending">
                  <div className="small">
                    <span className="glyphicon glyphicon-triangle-top block" aria-hidden="true"/>
                    <span className="glyphicon glyphicon-triangle-bottom block" aria-hidden="true"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReportHeader.propTypes = {
  reportsAmount: React.PropTypes.number.isRequired,
  loadReports: React.PropTypes.func.isRequired,
  toggleSidebarVisibility: React.PropTypes.func.isRequired,
  sortReports: React.PropTypes.func.isRequired,
  filterReports: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {reportsAmount: state.reportsAmount};
}

export default connect(mapStateToProps, {loadReports, toggleSidebarVisibility, sortReports, filterReports})(ReportHeader);
