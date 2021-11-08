import { useState } from 'react';
import { userToken } from '../../types/userToken';

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    let userToken;
    if (tokenString !== null) userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
}
