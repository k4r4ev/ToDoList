import { ADD_TO_DELETE_LIST, CLEAR_DELETE_LIST } from "../actions/actions";

const initialState = {
  desksId: [],
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DELETE_LIST:
      return {
        ...state,
        desksId: [...state.desksId, action.order],
      };
    case CLEAR_DELETE_LIST:
      return {
        ...state,
        desksId: [],
      };
    default:
      return state;
  }
}
