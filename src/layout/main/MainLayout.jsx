import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import FooterSection from "../../components/Section/FooterSection";

const MainLayout = () => {
  return (
    <div className="container overflow-x-hidden text-accent-dark font-Inter">
      <Navigation />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
