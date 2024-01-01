// Created a custom hook to promote single responsibility.
import { CORS_PROXY_URL } from "../constants/constants";
import { useEffect, useState } from "react";
import { MENU_API } from "../constants/constants";
const useMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(CORS_PROXY_URL + MENU_API + resId);
    const jsonData = await response.json();
    // console.log(jsonData);
    setResInfo(jsonData);
  };
  return resInfo;
};
export default useMenu;
