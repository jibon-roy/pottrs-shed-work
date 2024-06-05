import { Carousel } from "@material-tailwind/react";
import MenuSection from "../../../components/menu/Menu";
import CultivateSection from "../../../components/pages/home/Cultivate";
import ArrivalsSection from "../../../components/pages/home/ArrivalsSection";
import ConnectedSection from "../../../components/pages/home/ConnectedSection";
import BackInStockSection from "../../../components/pages/home/BackInStockSection";
import WindSpinnersSection from "../../../components/pages/home/WindspinnersSection";

const Home = () => {
  return (
    <>
      <MenuSection />
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-5 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-5 bg-primary-green"
                    : "w-5 bg-transparent border-2 border-solid border-[#828282]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <CultivateSection />
        <CultivateSection />
      </Carousel>
      <ArrivalsSection />
      <ConnectedSection />
      <BackInStockSection />
      <WindSpinnersSection />
    </>
  );
};

export default Home;
