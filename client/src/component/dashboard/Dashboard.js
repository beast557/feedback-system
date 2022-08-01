import React from 'react'
import './dashboard.css'


const Dashboard = ({dashboard}) =>{
    // console.log(dashboard)
    return(
        <section className="content">
        <h1 className="title">Dashboard</h1>
    <div className="boxes">
        <div className="box">
            <div>
                <h1>Total Units</h1><hr />
                <p>{dashboard.total_units}</p>
            </div>
        </div>
        <div className="box"><div>
            <h1>Total Investment</h1><hr />
            <p>{dashboard.total_investment}</p>
        </div></div>
        <div className="box"><div>
            <h1>Sold Amount</h1><hr/>
            <p>{dashboard.sold_amount}</p>
        </div></div>
        <div className="box"><div>
            <h1>Current Amount</h1><hr/>
            <p>{dashboard.current_amount}</p>
        </div></div>
        <div className="box">
            <div>
                <h1>Overall Profit</h1><hr/>
                <p>{dashboard.overall_profit}</p>
            </div>
        </div>
    </div>  
    </section>
    )
}
export default Dashboard