import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

const MainLayout = () => {
  return (
    <div className="container text-accent-dark font-Inter">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
