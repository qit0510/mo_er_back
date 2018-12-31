import config from '../config';
import {validateUser} from '../services/api';
import { getCookie, delCookie } from './helper';


export function redirectLogin() {
  window.location.href = config.redirectUrl;
}
export function authenticated() {
  const ssoToken = getCookie('sso_token');
  if (!ssoToken) {
    redirectLogin();
  }else {
    validateUser();
  }
}
export function logOut() {
  delCookie({
    name: 'sso_token',
    path: '/',
  });

  authenticated();
}
