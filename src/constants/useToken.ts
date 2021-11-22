import { useState } from 'react';
import { userToken } from '@/types/userToken';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    let userToken;
    if (tokenString !== null) userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState<string>(getToken());

  const saveToken = async (userToken: userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const removeToken = async () => {
    sessionStorage.removeItem('token');
    setToken('');
  };

  return {
    saveToken: saveToken,
    removeToken: removeToken,
    token
  };
}
