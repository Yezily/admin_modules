import fetch from '../http/http';

const config = {
  headers: {'Content-Type': 'multipart/form-data'},
  baseURL: '',
  method: 'post',
  suffix: false,
  token: false
}

export function requestLogin(data) {
  return fetch({
    data,
    url: 'SignIn/requestLogin',
      ...config
  })
}
