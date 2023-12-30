import { Outlet } from "react-router-dom";
import Header from "./Header";
// AppLayout Component is created to decide the structure of the application.
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AppLayout;
