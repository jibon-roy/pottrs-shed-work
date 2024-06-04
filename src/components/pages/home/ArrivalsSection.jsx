import ProductCard from "../../card/ProductCard";
import Heading from "../../mainHeading/Heading";
import img1 from "../../../assets/products/green_shells.png";
import img2 from "../../../assets/products/Rectangle93.png";
import img3 from "../../../assets/products/Rectangle94.png";
import img4 from "../../../assets/products/Rectangle95.png";
import Section from "../../Section/Section";
import FlexSection from "../../Section/FlexSection";

const ArrivalsSection = () => {
  const arrivalProducts = [
    {
      id: 1,
      title: "Ceramic Garden Snail with Green Shell",
      imgSrc: img1,
      quantity: 10,
    },
    {
      id: 2,
      title: "Bee Pot Hanger with Metal Legs",
      quantity: 10,
      imgSrc: img2,
    },
    {
      id: 3,
      title: "Quirky Bee Hanging Planter",
      quantity: 10,
      imgSrc: img3,
    },
    {
      id: 4,
      title: "Rust Tweety Pot Sitter",
      quantity: 12,
      imgSrc: img4,
    },
  ];

  return (
    <Section>
      <Heading title="Checkout New Products">New Arrivals</Heading>
      <FlexSection className="pt-5 pb-2 gap-5">
        {arrivalProducts.map(({ id, imgSrc, quantity, title }) => (
          <ProductCard key={id} imgSrc={imgSrc} quantity={quantity}>
            {title}
          </ProductCard>
        ))}
      </FlexSection>
    </Section>
  );
};

export default ArrivalsSection;
