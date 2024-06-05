import GridSection from "../../Section/GridSection";
import Section from "../../Section/Section";
import photo1 from "../../../assets/images/photos/Rectangle113.png";
import photo2 from "../../../assets/images/photos/Rectangle114.png";
import photo3 from "../../../assets/images/photos/Rectangle115.png";
import photo4 from "../../../assets/images/photos/Rectangle116.png";
import photo5 from "../../../assets/images/photos/Rectangle117.png";
import photo6 from "../../../assets/images/photos/Rectangle118.png";
import photo7 from "../../../assets/images/photos/Rectangle119.png";
import photo8 from "../../../assets/images/photos/Rectangle120.png";

const InstagramSection = () => {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];
  return (
    <Section>
      <GridSection className="gap-1">
        {photos.map((photo, idx) => (
          <img key={idx} src={photo} />
        ))}
      </GridSection>
    </Section>
  );
};

export default InstagramSection;
