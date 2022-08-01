import React,{useEffect} from 'react'

import { connect } from 'react-redux';

import Sidenav from '../UIElements/sidenav/Sidenav'
import DashboardContent from '../dashboard/Dashboard'
import Spinner from '../UIElements/spinner/Spinner'
import {get_dashboard} from '../../actions/dashboard'

const Dashboard = ({dashboard,loading,get_dashboard})=>{
    useEffect(()=>{
        get_dashboard();
    },[get_dashboard])
    return(
        <div className="main">
            
    <Sidenav/>
    {loading?<Spinner/>:<DashboardContent
    dashboard={dashboard}
    />}
    

</div>
    )
}

const mapStateToProps = state => ({
    loading: state.dashboard.loading,
    dashboard: state.dashboard.dashboard
    });
      
    export default connect(
    mapStateToProps,
    {get_dashboard }
    )(Dashboard);