import {FETCH_BEER_START, FETCH_BEER_SUCCESS, FETCH_BEER_FAIL} from '../actions'

const initialState =  {
  beers: [],
  error: '',
  isFetching: false 
}

function reducer(state = initialState, action){

  switch(action.type){

  case FETCH_BEER_START : 
  return {
  ...state, isFetching:true,
  error: '',
  }
 
  case FETCH_BEER_SUCCESS : 
  return {
  ...state, isFetching:false,
  error: '',
  beers: action.payload
  }
  
  case FETCH_BEER_FAIL : 
  return {
  ...state, isFetching:false,
  error: action.payload,
  }
  default: return state
  }
}

export default reducer;
