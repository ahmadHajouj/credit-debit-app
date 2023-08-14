import jwtDecode from "jwt-decode";
import apiClient, { setJwt } from "./apiClient";

const apiEndpoint = "/auth";
const tokenKey = "token";

setJwt(getJwt());

export async function login(user) {
  const { data: jwt } = await apiClient.post(apiEndpoint, user);
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
