import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.nahalit.ir/api/v1",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    config.headers.Accept = "application/json";
    return config;
  },
  function (error) {
    if (401 === error.response.code) {
      return Promise.reject(error.response.massage);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
