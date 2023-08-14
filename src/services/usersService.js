import apiClient from "./apiClient";

class HttpService {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getMe() {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint + "/me", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  signUp(entity) {
    return apiClient.post(this.endpoint, entity);
  }

  changePassword(entity) {
    return apiClient.put(this.endpoint + "/password", entity);
  }
}

const user = new HttpService("/users");

export default user;
