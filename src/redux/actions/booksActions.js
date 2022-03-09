import {getBooksByCategory, getBooksCatigoryByCategory} from "../../api/Api";
import { dispatch } from "../store";
import {GET_BOOKS, SET_CATEGORY_BOOKS,SET_ERROR} from "../types/types";




export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setNewsByCategory = async (category) => {
  setError(false);

  const obj = await getBooksByCategory(category);
  if (obj.success) dispatch({ type: GET_BOOKS, payload: obj.data.data });
  else setError(true);
};

export const setCategory = async (category) => {


  const obj = await getBooksCatigoryByCategory(category);
  if (obj.success) dispatch({ type: SET_CATEGORY_BOOKS, payload: obj.data.data });

};

