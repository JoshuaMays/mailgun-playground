import axios from 'axios';

export const ADD_MEMBER = 'ADD_MEMBER';

export function addMember(emailAddress) {
  console.log('in action', emailAddress);

  const request = axios.post('/api/addMember', {
    emailAddress
  });

  return {
    type: ADD_MEMBER,
    payload: request
  };

}