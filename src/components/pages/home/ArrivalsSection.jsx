import ProductCard from "../../card/ProductCard";
import Heading from "../../mainHeading/Heading";
import img1 from "../../../assets/products/green_shells.png";
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
      title: "Ceramic Garden Snail with Green Shell",
      quantity: 10,
      imgSrc: img1,
    },
    {
      id: 3,
      title: "Ceramic Garden Snail with Green Shell",
      quantity: 10,
      imgSrc: img1,
    },
    {
      id: 4,
      title: "Ceramic Garden Snail with Green Shell",
      quantity: 10,
      imgSrc: img1,
    },
  ];

  return (
    <Section>
      <Heading title="Checkout New Products">New Arrivals</Heading>
      <FlexSection className="">
        {arrivalProducts.map((product, id) => (
          <ProductCard key={product.id} quantity={product.quantity}>
            some text
          </ProductCard>
        ))}
      </FlexSection>
    </Section>
  );
};

export default ArrivalsSection;
