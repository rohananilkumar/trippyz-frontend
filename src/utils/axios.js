import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 600000,
     //headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
