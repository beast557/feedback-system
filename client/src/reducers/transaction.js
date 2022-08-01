import {
    FETCH_SHARE_NAME,
    FETCH_TRANSACTION
  } from '../actions/types';
  
  const initialState = {
    stocknames :[],
    stockname_loading: true,
    transaction:[],
    transaction_list_loading:true
  };

  export default function transaction(state = initialState, action) {
    const { type,payload } = action;
  
    switch (type) {
      case FETCH_SHARE_NAME:
        return {
          ...state,
          stocknames:payload,
          stockname_loading:false
        };
        case FETCH_TRANSACTION:
          return{
          ...state,
          transaction:payload,
          transaction_list_loading:false
        }
      default:
        return state;
    }
  }