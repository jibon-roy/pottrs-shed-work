import FlexSection from "../../Section/FlexSection";
import Section from "../../Section/Section";
import flower1 from "../../../assets/images/Rectangle104.png";
import flower2 from "../../../assets/images/Rectangle105.png";

const DiscountSection = () => {
  return (
    <Section className="bg-secondary-green">
      <FlexSection>
        <div>
          <img src={flower1} alt="" />
        </div>
      </FlexSection>
    </Section>
  );
};

export default DiscountSection;
