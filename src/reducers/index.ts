import { PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import { SET_FORM_DATA, RESET_FORM_DATA } from '../actions/type';
import RootState from '../types/rootState';
const appReducer = (
  state = initialState,
  action: PayloadAction<Record<string, string>>,
): RootState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    case RESET_FORM_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default appReducer;
