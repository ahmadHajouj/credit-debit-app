import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://credit-debit-api.onrender.com/api",
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
