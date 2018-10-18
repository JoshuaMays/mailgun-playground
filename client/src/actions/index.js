import axios from 'axios';

export const ADD_MEMBER = 'ADD_MEMBER';

export function addMember(member) {

  const request = axios.post('/api/addMember', {
    member
  });

  return {
    type: ADD_MEMBER,
    payload: request
  };

}