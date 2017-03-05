import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import {toggleSidebarVisibility} from '../actions';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8">
            <Sidebar/>
          </div>
          <div className="col-xs-4">
            <button onClick={this.props.toggleSidebarVisibility}>
              Show/Hide Sidebar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  toggleSidebarVisibility: React.PropTypes.func.isRequired
};

export default connect(null, {toggleSidebarVisibility})(App);
