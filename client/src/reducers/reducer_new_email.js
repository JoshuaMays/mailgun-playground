import { ADD_MEMBER } from '../actions';

export default function( state = [], action) {
  switch(action.type) {
    case ADD_MEMBER:
      return [action.payload.data, ...state];
    default: return state;
  }
}
