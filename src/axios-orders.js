import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-project-f858a.firebaseio.com/",
});

export default instance;
