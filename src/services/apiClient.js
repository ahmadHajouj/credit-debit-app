import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
