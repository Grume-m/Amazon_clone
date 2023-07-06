import axios from "axios";

const instance = axios.create({
  baseURL: "https://grume-amazon.cyclic.app",
  // https://us-centrall-clone-d9842.cloudfunctions.net/api
});

export default instance;
