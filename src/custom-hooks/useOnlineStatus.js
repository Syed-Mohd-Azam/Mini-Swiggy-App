import { useState, useEffect } from "react";
// Another Custom Hook Created
const useOnlineStatus = () => {
  const [status, setStatus] = useState("online");
  useEffect(() => {
    window.addEventListener("online", () => setStatus("online"));
    window.addEventListener("offline", () => setStatus("offline"));
  }, []);
  return status;
};
export default useOnlineStatus;
