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
<<<<<<< HEAD
        <Header />
        <UserContext.Provider value={{ loggedInUser: "Syed Mohd Azam" }}>
          <Outlet />
        </UserContext.Provider>
=======
        <Header />
        <Outlet />
>>>>>>> 322ce7174a801d3402fb76ea1a63375e8d23ec21
      </UserContext.Provider>
    </>
  );
};
export default AppLayout;
