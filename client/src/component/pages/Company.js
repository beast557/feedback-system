import React , {useEffect} from 'react'
import Sidenav from '../UIElements/sidenav/Sidenav'
import Spinner from '../UIElements/spinner/Spinner'

import { connect } from 'react-redux';
import CompanyComponent from '../company/Company'
import {get_company} from '../../actions/company'

const Company = ({match,get_company,company,loading})=>{
    useEffect(()=>{
        get_company(match.params.companyId);
    },[match.params.companyId,get_company])
    return(
        <>
        <Sidenav/>
        <div className="main">
           
        {loading ? <Spinner/>:
        <CompanyComponent 
            company = {company}
        />
            }
        </div>
        </>
    )
}
const mapStateToProps = state => ({
    loading: state.company.company_loading,
    company: state.company.company
    });
      
    export default connect(
    mapStateToProps,
    {get_company}
    )(Company);