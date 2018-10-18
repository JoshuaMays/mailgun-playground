import { combineReducers } from 'redux';
import MembersReducer from './reducer_new_email';
const rootReducer = combineReducers({
  members: MembersReducer
});

export default rootReducer;
