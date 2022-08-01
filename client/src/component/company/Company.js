import React from 'react'
import {Link} from 'react-router-dom'

import './company.css'
const Company = ({company})=>{
    return(
        <>
        <section className="content company">
            <h3><Link to="/companies">Back</Link></h3>
    <div className="company">
        <div className="box">
            <div className>
                <h1>{company.short_name}</h1><hr/>
                <p>{company.full_name}</p>

    
    <p><span>total_units</span>: {company.total_units}</p>
    <p><span>total_investment</span>: {company.total_investment}</p>
    <p><span>sold_amount</span>: {company.sold_amount}</p>
    <p><span>current_amount</span>: {company.current_amount}</p>
    <p><span>overall_profit</span>: {company.overall_profit}</p>
    
            </div>
        </div>
        
        
    </div> 
    </section>
        </>
    )
}

export default Company