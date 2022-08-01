import React from 'react'

const CompaniesList = (props)=>{
    return(
        <>
        <div className="box">
            <div>
                <h1>{props.short_name}</h1><hr/>
                <p>{props.full_name}</p>
            </div>
            <div className="view-more"><a href={`/company/${props.id}`}>view more</a></div>
        </div>
        </>
    )
}

export default CompaniesList;