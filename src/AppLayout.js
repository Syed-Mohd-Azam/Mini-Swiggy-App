import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserContext from "./constants/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./constants/configureStore";

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
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
export default AppLayout;
