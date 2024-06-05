import FlexSection from "../../Section/FlexSection";
import Section from "../../Section/Section";
import Image1 from "../../../assets/images/Rectangle102.png";
import Image2 from "../../../assets/images/Rectangle102.png";
import Image3 from "../../../assets/images/Rectangle102.png";
import Image4 from "../../../assets/images/Rectangle102.png";
import Image5 from "../../../assets/images/Rectangle102.png";

const WindSpinnersSection = () => {
  return (
    <Section className="bg-secondary-green">
      <FlexSection className="justify-between">
        <div></div>
        <div>
          <img src={Image1} />
        </div>
        <div></div>
      </FlexSection>
    </Section>
  );
};

export default WindSpinnersSection;
