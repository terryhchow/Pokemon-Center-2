import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productReducer from './product_reducer';
import cartReducer from './cart_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    cart: cartReducer
});

export default entitiesReducer;