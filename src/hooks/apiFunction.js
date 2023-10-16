import axios from "axios";

const getApi = (url) => {
  return axios.get(url);
};

const getApiById = (url, id) => {
  return axios.get(`${url}/${id}`);
};

const postApi = (url, data) => {
  return axios.post(url, data);
};

const putApi = (url, id, data) => {
  return axios.put(`${url}/${id}`, data);
};

const deleteApi = (url, id) => {
  return axios.delete(`${url}/${id}`);
};

export { getApi, getApiById, postApi, putApi, deleteApi };
