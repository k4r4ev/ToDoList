import { ADD_TO_DESK_IGNORE } from '../actions/actions'

const initialState = (localStorage.length === 0) ? {
  deskIgnore: []
} : (JSON.parse(localStorage.getItem('storage'))).modal

export function modalReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DESK_IGNORE:
      return {
        ...state,
        deskIgnore: [...state.deskIgnore, action.order]
      }
    default:
      return state
  }
}
