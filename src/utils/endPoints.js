export const endpoints = {
  getUsers: {
    method: "GET",
    url: "/users",
  },
  registerUser: {
    method: "POST",
    url: "/users",
  },
  loginUser: {
    method: "POST",
    url: "/users",
  },
  logoutUser: {
    method: "POST",
    url: "/users",
  },
  getChannels: {
    method: "GET",
    url: "/channels",
  },
  getChannelsById: {
    method: "GET",
    url: "/channels/:id",
  },
  createChannel: {
    method: "POST",
    url: "/channels",
  },
  updateChannel: {
    method: "PUT",
    url: "/channels/:id",
  },
  deleteChannel: {
    method: "DELETE",
    url: "/channels/:id",
  },
  getMediums: {
    method: "GET",
    url: "/mediums",
  },
  getMediumsById: {
    method: "GET",
    url: "/mediums/:id",
  },
  createMedium: {
    method: "POST",
    url: "/mediums",
  },
  updateMedium: {
    method: "PUT",
    url: "/mediums/:id",
  },
  deleteMedium: {
    method: "DELETE",
    url: "/mediums/:id",
  },
  listMediums: {
    method: "GET",
    url: "/mediums/list",
  },
  getLists: {
    method: "GET",
    url: "/lists",
  },
  getListsById: {
    method: "GET",
    url: "/lists/:id",
  },
  createList: {
    method: "POST",
    url: "/lists",
  },
  updateList: {
    method: "PUT",
    url: "/lists/:id",
  },
  deleteList: {
    method: "DELETE",
    url: "/lists/:id",
  },
};
