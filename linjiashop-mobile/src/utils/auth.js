import Cookies from 'js-cookie'

const COOKIE_KEY_PRE="lite-shop-mobile-"
const tokenKey = COOKIE_KEY_PRE+"token"
export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}
export function setCookie(key,value){
  return Cookies.set(key,value)
}
export  function getCookie(key){
  return Cookies.get(key)
}
