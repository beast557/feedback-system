import React , {useState } from 'react';
import './transaction.css';
import Label from '../resueable/lable/Label'
import Alert from '../UIElements/Alert/Alert';
import StockOption from './StockOption'
import moment from "moment";
import { connect } from 'react-redux';

import {create_transaction} from '../../actions/transaction'
import OrderList from './OrderList';
const Transaction = ({create_transaction,stocknames, transactions})=> {
    const defaultField = {
        stockId:'default',
        transaction_type:'default',
        price: 0,
        quantity:0,
        transaction_date:  moment().format("DD/MM/YYYY")
    }

    const [formData, setFormData] = useState(defaultField);

    let { stockId,
    transaction_type,
    price,
    transaction_date,
    quantity
    } = formData;
    
    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onFinish = e => {
        e.preventDefault();
        console.log(stockId);
        create_transaction({stockId,transaction_type,price,quantity});
        setFormData(defaultField);
};
    const onReset = e =>{
        e.preventDefault();
        setFormData(defaultField);
    }

    return (
        <>
        <section className="content">
        <div>
            <Alert />
            <form >
            <Label for="Share-name" text="Share name"/>
                <select name="stockId" id="stockId" value={stockId} onChange={onChange}>
                    <option value="default" disabled selected>Select share name</option>
                {stocknames.map(stockname=>(
          <StockOption 
          key={stockname.id}
          value={stockname.id}
          shortname={stockname.short_name}
          />
      ))}
                  </select>
                  <Label for="Transaction-type" text="Transaction type"/>
                <select name="transaction_type" id="transaction_type" value={transaction_type} onChange={onChange}>
                    <option value="default" disabled selected>Select your option</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>

            <Label for="Price" text="Price per unit"/>
            <input type="number" name="price" placeholder="price"
             value={price} onChange={onChange}/>

            <Label for="quantity" text="Quantity"/>
            <input type="number" name="quantity" placeholder="quantity"
            value={quantity} onChange={onChange}/>

            <Label for="Transaction-date" text="Transaction date"/>
            <input type="datetime" name="transaction_date" placeholder="4/21/2021" disabled value={transaction_date}/>
            </form>
            <button class="btn btn-primary" onClick={onFinish}>Submit</button>
            <button class="btn btn-secondary" onClick={onReset}>Reset</button>
        </div>
        <table className="order-list">
            <tr>
                <th>Name</th>
                <th>Transaction type</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
                {transactions.map(transaction=>(
          <OrderList
          key={transaction.id}
          transaction_type={transaction.transaction_type}
          quantity={transaction.quantity}
          price = {transaction.price}
          date = {transaction.createdAt}
          stockname = {transaction.stock.short_name}
          />
      ))}

    </table>              
    </section>
        </>
    )
}

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(
mapStateToProps,
{create_transaction }
)(Transaction);