import axios from "axios";
import { auth } from "./Config/firebase";

export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/v1`,
});

export async function Api(user = auth.currentUser) {
  let token = await user.getIdToken();
  return axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/v1`,
    headers: {
      authorization: token,
      apiKey: "AIzaSy",
    },
  });
}
export async function BuissnessApi(
  user = auth.currentUser,
  id = localStorage.getItem("buissnessId")
) {
  let token = await user.getIdToken();
  return axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/v1/buissness/`,
    headers: {
      authorization: token,
      apiKey: "AIzaSy",
      buissnessid: id,
    },
  });
}
