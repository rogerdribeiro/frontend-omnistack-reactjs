import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-omnistack1.herokuapp.com/"
});

export default api;
