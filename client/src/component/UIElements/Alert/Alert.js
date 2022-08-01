import React from 'react';
import { connect } from 'react-redux';

import './alert.css'
const AlertBox = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`} role="alert">
    <div >
      {alert.msg}
    </div>
  </div>
  ));



const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertBox);