import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import errorsReducer from './errors_reducer';
import productReducer from './product_reducer';
import cartReducer from './cart_reducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    ui: uiReducer,
    errors: errorsReducer,
});

export default rootReducer;