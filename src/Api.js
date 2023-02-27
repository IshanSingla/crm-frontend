import axios from "axios";
import { auth } from "./Config/firebase";

export const publicApi = axios.create({
  baseURL: "https://crm.ishansingla.me/api/v1",
});

async function Api() {
  let token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: "https://crm.ishansingla.me/api/v1",
    headers: {
      authorization: token,
      apiKey: "AIzaSy",
    },
  });
}

export default Api;
