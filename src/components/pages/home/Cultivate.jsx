import Section from "../../Section/Section";
import vector1 from "../../../assets/bg_texture/Vector1.png";
import vector2 from "../../../assets/bg_texture/Vector2.png";
import flower from "../../../assets/images/flowers.png";
import ButtonGreen from "../../button/ButtonGreen";
import useGSAPFrom from "../../../lib/GSAP/GSAPForm";

const CultivateSection = () => {
  const fromLeft1 = useGSAPFrom({ x: -100, y: 0, duration: 2, delay: 0 });
  const fromLeft2 = useGSAPFrom({ x: -100, y: 0, duration: 2, delay: 0.3 });
  const fromLeft3 = useGSAPFrom({ x: -100, y: 0, duration: 2, delay: 0.5 });
  const fromLeft4 = useGSAPFrom({
    x: 100,
    y: 0,
    duration: 1,
    delay: 0.3,
    skewX: 10,
  });

  return (
    <Section className="bg-secondary-green py-16">
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="relative max-w-[35rem] mx-auto lg:max-w-[37rem] font-Noto">
          <h1
            ref={fromLeft1}
            className="text-6xl leading-[74.4px] lg:leading-[74.4px]  text-accent-dark"
          >
            Cultivate Your Outdoor Paradise with Plants & Decor!
          </h1>
          <p ref={fromLeft2} className="my-4 text-[16px]">
            Discover an abundance of greenery and decorative treasures at
            wholesale prices. Elevate your garden with our diverse selection of
            plants and adornments, all designed to inspire your outdoor
            sanctuary
          </p>
          <div ref={fromLeft3}>
            <ButtonGreen>Shop Now</ButtonGreen>
          </div>
          <img src={vector1} alt="bg" className="absolute top-0 right-7" />
          <img src={vector2} alt="bg-2" />
        </div>
        <div>
          <img
            ref={fromLeft4}
            src={flower}
            className="mx-auto rounded-l-full rounded-r-full lg:rounded-r-none"
            alt="flowers"
          />
        </div>
      </div>
    </Section>
  );
};

export default CultivateSection;
