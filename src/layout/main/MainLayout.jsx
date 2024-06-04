import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

const MainLayout = () => {
  return (
    <div className="container text-accent-dark">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
