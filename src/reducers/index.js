import cartReducer from './cart'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: cartReducer
}); 
    
export default allReducers;