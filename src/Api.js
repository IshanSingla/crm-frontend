import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://crm.ishansingla.me/api/v1",
});
