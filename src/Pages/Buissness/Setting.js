/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import loading from "../../Assets/Lotties/loading.json";
import Lottie from "lottie-react";
import SettingMenus from "./Components/SettingMenus";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Route, Routes } from "react-router-dom";
import SettingHome from "./Components/SettingHome";

export default function Settings() {
  const [data, setData] = useState(true);

  const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   setData(null);
  //   BuissnessApi()
  //     .then((publicApi) => {
  //       publicApi
  //         .get(`/one`)
  //         .then((res) => {
  //           setData(res.data.buissness);
  //         })
  //         .catch((err) => {
  //           toast.error(err.message);
  //         });
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // }, [update]);
  return data ? (
    <div className=" flex flex-col gap-6">
      {/* Menus */}
      <div
        className={` rounded-xl px-6 flex
          ${theme ? "bg-secBlack" : "bg-primWhite"}
        `}
      >
        <div className="overflow-auto">
          <SettingMenus theme={theme} />
        </div>
      </div>

      {/* Main */}
      <div
        className={` rounded-xl px-6 py-6 flex
          ${theme ? "bg-secBlack text-primWhite" : "bg-primWhite text-black"}
        `}
      >
        <Routes>
          <Route path="/" element={<SettingHome theme={theme} />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="h-[90%] justify-center items-center flex ">
      <div className="w-32">
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
}
