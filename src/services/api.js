import axios from "axios";

export const api = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 2000, //2 seconds
});

export const getData = (page) => {
  return api.get('api/', {
    params: {
      gender: 'male',
      results: 10,
      page: page,
    },
  });
}