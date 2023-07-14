import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://travel-jpx4.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;

// baseURL: "https://travel-jpx4.onrender.com/api/",
// baseURL: "http://localhost:1337/api/",
// x
