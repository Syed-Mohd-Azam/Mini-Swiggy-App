import { useEffect, useState } from "react";
import { MENU_API } from "../constants/constants";
const useMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const jsonData = await response.json();
    console.log(jsonData);
    setResInfo(jsonData);
  };
  return resInfo;
};
export default useMenu;
