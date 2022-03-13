import axios from "axios";

export const api = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 2000, //2 seconds
});