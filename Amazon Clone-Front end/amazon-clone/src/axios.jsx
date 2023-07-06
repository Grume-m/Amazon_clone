import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:10000",
  // https://us-centrall-clone-d9842.cloudfunctions.net/api
});

export default instance;
