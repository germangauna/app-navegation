import { combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import BreadsReducer from "./reducers/breads.reducer";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    breads: BreadsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))