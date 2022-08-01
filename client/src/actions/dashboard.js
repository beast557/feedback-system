import axios from 'axios';
import { setAlert } from './alert';

import {FETCH_DASHBOARD} from './types'

export const get_dashboard = ()=> async dispatch=>{
  const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      const res = await axios.get('/api/v1/dashboard/showdashboard',config);
      dispatch({
        type: FETCH_DASHBOARD,
        payload:res.data[0]
      }); 
    }catch(err){
      const errors = err.response.data.errors;
    
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
 
    }
 
  }
