import axios from "axios";

const instance = axios.create({
  baseURL: "https://stormy-headland-53061.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const api = {
  getList() {
    return instance.get("/").then((responce) => {
      return responce.data;
    });
  },
  getItem(id) {
    return instance.get(`/item/${id}`).then((responce) => {
      return responce.data;
    });
  },
};

export default api;
