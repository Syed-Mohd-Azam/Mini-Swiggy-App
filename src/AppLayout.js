import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserContext from "./constants/UserContext";
import { useState, useEffect } from "react";
// AppLayout Component is created to decide the structure of the application.
const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");
  // authentication
  useEffect(() => {
    // Make an API call and set the data of the user.
    const data = {
      name: "Azam",
    };
    setUserName(data?.name);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};
export default AppLayout;
