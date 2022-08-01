import React from 'react'
import CompaniesList from './CompaniesList'
import './companies.css'

const Companies = ({companies})=> {
    return (
        <>
    <section className="content">
    <h1 className="title">Companies</h1>
    <div className="boxes">
        
        {companies.length<1?<p>Currently no company is listed</p>:
        companies.map(company=>(
            <CompaniesList 
            key={company.id}
            id={company.id}
            short_name = {company.short_name}
            full_name = {company.full_name}
            />
        ))}
        </div>
    </section>
        </>
    )
}
export default Companies