import { combineReducers } from "redux";
import booksReducer from "./productsInfo";

const rootReducer = combineReducers({
    books: booksReducer,
});

export default rootReducer;