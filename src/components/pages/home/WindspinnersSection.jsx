import FlexSection from "../../Section/FlexSection";
import Section from "../../Section/Section";
import Image1 from "../../../assets/images/Rectangle102.png";
import Image2 from "../../../assets/bg_texture/Vector3.png";
import Image3 from "../../../assets/images/Rectangle100.png";
import Image4 from "../../../assets/bg_texture/OBJECTS.png";
import Image5 from "../../../assets/images/Rectangle99.png";
import ButtonGreen from "../../button/ButtonGreen";

const WindSpinnersSection = () => {
  return (
    <div className="2xl:h-[560px] flex items-center justify-center my-28 w-full bg-secondary-green">
      <Section animated className="lg:w-full">
        <FlexSection className="justify-between relative">
          <div className="max-w-sm flex flex-col justify-between">
            <div></div>
            <div>
              <img
                className="inline-block mb-20 aspect-square"
                src={Image4}
                alt="image4"
              />
              <h3 className="text-4xl font-Inter font-medium">Windspinners</h3>
              <p className="font-medium">
                Wind spinners add charm to outdoor spaces with their graceful
                twirls, capturing the essence of nature{"'"}s breezes. Hung from
                trees or placed in gardens, they create mesmerizing focal
                points, inviting moments of tranquility.
              </p>
              <ButtonGreen>Shop Now</ButtonGreen>
              <div>
                <img src={Image5} alt="image5" />
              </div>
            </div>
          </div>
          <div className="rounded-full hidden 2xl:block border-solid border-[#D9D9D9] border-[10px]">
            <img src={Image1} alt="picture" />
          </div>
          <div className="flex flex-col justify-between">
            <div></div>
            <div>
              <img src={Image2} className="-mb-5 w-32 -ml-5" alt="picture" />
              <img src={Image3} className="w-60 2xl:w-full" alt="picture" />
            </div>
          </div>
        </FlexSection>
      </Section>
    </div>
  );
};

export default WindSpinnersSection;
