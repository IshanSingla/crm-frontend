import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://crm.ishansingla.me",
});
// export const publicApi = axios.create({
//   baseURL: "https://crm-backend-smoky.vercel.app",
// });
