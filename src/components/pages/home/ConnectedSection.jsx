import React from "react";
import Section from "../../Section/Section";
import FlexSection from "../../Section/FlexSection";
import bg1 from "../../../assets/bg_texture/Vector3.png";
import bg2 from "../../../assets/bg_texture/Vector3_1.png";
import { PiFacebookLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import Heading from "../../mainHeading/Heading";

const ConnectedSection = () => {
  return (
    <Section className="bg-secondary-green py-5">
      <FlexSection className="items-center justify-between">
        <div>
          <img src={bg1} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <Heading className="my-3">Stay Connected</Heading>
          <FlexSection className="text-5xl justify-between w-full">
            <a href="#">
              <PiFacebookLogoThin />
            </a>
            <a href="#">
              <PiInstagramLogoThin />
            </a>
            <a href="#">
              <GoMail />
            </a>
          </FlexSection>
        </div>
        <div>
          <img src={bg2} alt="" />
        </div>
      </FlexSection>
    </Section>
  );
};

export default ConnectedSection;
