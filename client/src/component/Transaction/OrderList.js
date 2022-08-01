import React from 'react'
import Moment from 'react-moment';

const OrderList = (props)=>{
return(
    <tr>
        <td className="table-body">{props.stockname}</td>
        <td className="table-body">{props.transaction_type}</td>
        <td className="table-body">{props.quantity}</td>
        <td className="table-body">{props.price}</td>
        <td className="table-body">
        <Moment format="DD/MM/YYYY">
        {props.date}
            </Moment>

        </td>
    </tr>
)
}
export default OrderList