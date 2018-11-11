export const environment = {production: true};

export let APIURL = '';

switch (window.location.hostname) {
  case 'kbc-bfserver.herokuapp.com':
    APIURL = 'https://kbc-bfserver.herokuapp.com';
    break;
  default: APIURL = 'http://localhost:3000';
}
