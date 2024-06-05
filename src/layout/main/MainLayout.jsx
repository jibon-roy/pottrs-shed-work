import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import FooterSection from "../../components/Section/FooterSection";

const MainLayout = () => {
  return (
    <div className="container text-accent-dark font-Inter">
      <Navigation />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
