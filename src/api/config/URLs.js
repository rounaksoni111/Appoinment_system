const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case 'abilitieze.com':
      return 'https://abilitieze.com';

    case 'localhost':
      return 'http://localhost:5000';

    default:
      return 'http://localhost:5000';
  }
};

const URL = configureApiRoot();
export const API_URL = URL;
export const AUTH_URL = URL;
export const API_CONSUMER = URL;
