import React,{useEffect} from 'react'
import Sidenav from '../UIElements/sidenav/Sidenav'
import Spinner from '../UIElements/spinner/Spinner'
import CompaniesComponent from '../companies/Companies'

import { connect } from 'react-redux';

import {get_companies} from '../../actions/company'

const Companies = ({
    get_companies,
    loading,
    companies
})=> {
    useEffect(()=>{
        get_companies();
    },[get_companies])
    return (
        <>
        <Sidenav/>
        <div className="main">

        {loading ? <Spinner/>:
        <CompaniesComponent 
            companies = {companies}
        />
            }
        </div>
        </>
    )
}


const mapStateToProps = state => ({
    loading: state.company.companies_loading,
    companies: state.company.companies
    });
      
    export default connect(
    mapStateToProps,
    {get_companies }
    )(Companies);