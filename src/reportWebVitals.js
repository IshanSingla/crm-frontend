import { toast } from "react-toastify";

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
};

export default reportWebVitals;
