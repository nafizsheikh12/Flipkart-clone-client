import axios from 'axios'
import * as actionType from '../constants/productConstant';

const url = "https://flipkarts.herokuapp.com"

export const getProducts = () => async (dispatch) => {
  try {
  
    const  {data}  = await axios.get(`${url}/products`);
    console.log('data')
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });

  }catch(error){
      
      dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.response });
  }
}


export const getProductDetails = (id) => async (dispatch) => {
  try {
       const {data} = await axios.get(`${url}/saman/${id}`)
       console.log(data)
       dispatch({ type: actionType.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  }catch(error){
    console.log(error)
      
    dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
  }
}