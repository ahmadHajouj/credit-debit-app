import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://credit-debit-api.vercel.app",
});
axios.interceptors.response.use(null, (error) => {
  axios.defaults.withCredentials = true;
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export { CanceledError, setJwt };
