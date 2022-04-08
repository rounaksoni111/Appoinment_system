import isEmpty from '../../utils/isEmpty';

export function authHeader() {
  const accessToken = localStorage.getItem('accessToken');

  if (isEmpty(accessToken)) {
    return { 'content-type': 'application/json' };
  }
  return {
    'content-type': 'application/json',
    Authorization: `${accessToken}`,
  };
}
