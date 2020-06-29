import {
  GET_VALUES,
  CHANGE_VALUE,
  ChartActionTypes,
  VALUES_RECIEVED,
  EDIT_VALUE
} from "./actionTypes";

const initialState = {
  editing: false,
  loadingValues: false,
  CAC40: [],
  NASDAQ: []
};

export function chartReducer(state = initialState, action: ChartActionTypes) {
  switch (action.type) {
    case GET_VALUES:
      return { ...state, loadingValues: true };
    case EDIT_VALUE:
      return { ...state, editing: state.editing ? false : true };
    case VALUES_RECIEVED:
      return {
        ...state,
        CAC40: action.CAC40,
        NASDAQ: action.NASDAQ,
        loadingValues: false
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.stock]: state[action.stock].map((value, index) =>
          action.index === index ? action.newValue : value
        )
      };
    default:
      return state;
  }
}
