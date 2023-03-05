import axios from "axios";
import { auth } from "./Config/firebase";

export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/v1`,
});

export async function Api() {
  let token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/v1`,
    headers: {
      authorization: token,
      apiKey: "AIzaSy",
    },
  });
}
export async function BuissnessApi() {
  let id = localStorage.getItem("buissnessId");
  let token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/v1/buissness/`,
    headers: {
      authorization: token,
      apiKey: "AIzaSy",
      buissnessid: id,
    },
  });
}
