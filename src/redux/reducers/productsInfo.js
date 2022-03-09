import { GET_BOOKS,SET_CATEGORY_BOOKS,SET_ERROR } from "../types/types";

const initialState = {

        error: false,

};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BOOKS:
            return { ...state, news: action.payload };
        case SET_CATEGORY_BOOKS:
            return { ...state, news: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

export default booksReducer;