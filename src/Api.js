import axios from "axios";

// export const publicApi = axios.create({
//   baseURL: "http://localhost:4000",
// });
export const publicApi = axios.create({
  baseURL: "https://crm-backend-smoky.vercel.app",
});