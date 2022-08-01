import {
    FETCH_COMPANY,
    FETCH_COMPANIES
  } from '../actions/types';
  
  const initialState = {
    companies :[],
    companies_loading: true,
    company:{},
    company_loading:true
  };

  export default function company(state = initialState, action) {
    const { type,payload } = action;
  
    switch (type) {
      case FETCH_COMPANY:
        return {
          ...state,
          company:payload,
          company_loading:false
        };
        case FETCH_COMPANIES:
          return{
          ...state,
          companies:payload,
          companies_loading:false
        }
      default:
        return state;
    }
  }