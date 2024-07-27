import Sidebar from "./Sidebar";
// import CardContainer from "./CardContainer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      {/* <CardContainer /> */}
      <Outlet />
    </div>
  );
};

export default MainContainer;
