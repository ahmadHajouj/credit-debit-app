import apiClient from "./apiClient";

class HttpService {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  getOne(id) {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint + "/" + id, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create(entity) {
    return apiClient.post(this.endpoint, entity);
  }

  update(entity) {
    return apiClient.put(this.endpoint + "/" + entity._id, entity);
  }
}

const create = (endpoint) => new HttpService(endpoint);

export default create;
