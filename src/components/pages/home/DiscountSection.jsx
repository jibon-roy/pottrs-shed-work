import FlexSection from "../../Section/FlexSection";
import Section from "../../Section/Section";
import flower1 from "../../../assets/images/Rectangle104.png";
import flower2 from "../../../assets/bg_texture/Vector4.png";
import flower3 from "../../../assets/images/Rectangle105.png";
import flower4 from "../../../assets/bg_texture/Vector1.png";
import Heading from "../../mainHeading/Heading";
import ButtonGreen from "../../button/ButtonGreen";

const DiscountSection = () => {
  return (
    <Section className="bg-secondary-green">
      <FlexSection className="gap-5 justify-between flex-wrap items-center">
        <div className="mx-auto">
          <img src={flower1} alt="flower1" />
        </div>
        <FlexSection className="items-center gap-3 mx-auto">
          <div>
            <Heading className="mb-5">20% Discount on Your First Order</Heading>
            <p className="text-xl font-medium">*Minimum $500 Spend </p>
            <ButtonGreen>Shop now</ButtonGreen>
          </div>
          <div>
            <img src={flower2} alt="flower2" />
          </div>
        </FlexSection>
      </FlexSection>
      <div className="gap-5 flex justify-between flex-col lg:flex-row flex-wrap items-center">
        <div className="flex items-center gap-3 mx-auto">
          <div>
            <img src={flower4} className="reflect" alt="flower4" />
          </div>
          <div className="mx-auto">
            <Heading className="mb-5">20% Discount on Your First Order</Heading>
            <p className="text-xl font-medium">*Minimum $500 Spend </p>
            <ButtonGreen>Shop now</ButtonGreen>
          </div>
        </div>
        <div className="mx-auto">
          <img src={flower3} alt="flower1" />
        </div>
      </div>
    </Section>
  );
};

export default DiscountSection;
