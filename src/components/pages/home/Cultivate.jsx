import Section from "../../Section/Section";
import FlexSection from "../../flexSection/FlexSection";
import vector1 from "../../../assets/bg_texture/Vector1.png";
import vector2 from "../../../assets/bg_texture/Vector2.png";
import flower from "../../../assets/images/flowers.png";
import ButtonGreen from "../../button/ButtonGreen";

const Cultivate = () => {
  return (
    <Section className="bg-secondary-green py-16">
      <FlexSection className="justify-between">
        <div className="relative max-w-[37rem] font-Noto">
          <h1 className="leading-[74.4px] text-6xl text-accent-dark">
            Cultivate Your Outdoor Paradise with Plants & Decor!
          </h1>
          <p className="my-4 text-[16px]">
            Discover an abundance of greenery and decorative treasures at
            wholesale prices. Elevate your garden with our diverse selection of
            plants and adornments, all designed to inspire your outdoor
            sanctuary
          </p>
          <ButtonGreen>Shop Now</ButtonGreen>
          <img src={vector1} alt="bg" className="absolute top-0 right-7" />
          <img src={vector2} alt="bg-2" />
        </div>
        <div>
          <img src={flower} className="rounded-l-full" alt="flowers" />
        </div>
      </FlexSection>
    </Section>
  );
};

export default Cultivate;
