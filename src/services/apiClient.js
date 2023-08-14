import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://127.0.0.1:3000/api",
  withCredentials: true,
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
