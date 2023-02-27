import {
  logEvent,
  setUserProperties,
  setCurrentScreen,
  setUserId,
} from "firebase/analytics";
import { analytics } from "./firebase";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

export const FirebaseAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
    const page_path = location.pathname + location.search;
    setCurrentScreen(analytics, page_path);
    Axios.get("https://ipapi.co/json/").then((res) => {
      setUserId(analytics, res.data.ip);
      setUserProperties(analytics, {
        ip: res.data.ip,
        country: res.data.country_name,
        city: res.data.city,
        region: res.data.region,
        postal: res.data.postal,
        timezone: res.data.timezone,
        latitude: res.data.latitude,
        longitude: res.data.longitude,
      });
      logEvent(analytics, "view", {
        path: window.location.href,
        route: page_path,
        ip: res.data.ip,
      });
    });
    // }
  }, [location]);
  return null;
};
