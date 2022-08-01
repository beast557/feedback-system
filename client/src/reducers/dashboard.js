import {
    FETCH_DASHBOARD
  } from '../actions/types';
  
  const initialState = {
    dashboard:{},  
    loading:false
  };

  export default function dashboard(state = initialState, action) {
    const { type,payload } = action;
  
    switch (type) {
      case FETCH_DASHBOARD:
        return {
          ...state,
          dashboard:payload,
          loading:false
        };

      default:
        return state;
    }
  }