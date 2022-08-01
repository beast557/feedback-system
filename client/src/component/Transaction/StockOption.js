import React from 'react'

const StockOption = (props)=>{
return(
    <>
    <option value={`${props.value}`}>{props.shortname}</option>
    </>
)
}
export default StockOption