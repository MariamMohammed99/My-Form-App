import { PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { SET_FORM_DATA, RESET_FORM_DATA } from "../actions/type";

const appReducer = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    case RESET_FORM_DATA:
      return {
        ...state,
        formData: {},
      };

    default:
      return state;
  }
};

export default appReducer;
