import FlexSection from "../../Section/FlexSection";
import Section from "../../Section/Section";
import Heading from "../../mainHeading/Heading";
import img1 from "../../../assets/products/Rectangle96.png";
import img2 from "../../../assets/products/Rectangle96_1.png";
import img3 from "../../../assets/products/Rectangle96_2.png";
import img4 from "../../../assets/products/Rectangle96_3.png";
import ProductCard from "../../card/ProductCard";
import GridSection from "../../Section/GridSection";

const BackInStockSection = () => {
  const products = [
    {
      id: 1,
      title: "Fern Garden Stakes (assorted)",
      imgSrc: img1,
      rating: 3,
      price: 10,
    },
    {
      id: 2,
      title: "Mr Pig with Lantern",
      price: 95,
      imgSrc: img2,
      rating: 4,
    },
    {
      id: 3,
      title: "Welcome to Our Garden Hanging Bee Signs",
      price: 500,
      imgSrc: img3,
      rating: 4,
    },
    {
      id: 4,
      title: "Resin Solar Tree with Owl",
      price: 12,
      imgSrc: img4,
      rating: 5,
    },
  ];

  return (
    <Section>
      <Heading title="Top Demand Products Now Back in Stock">
        Back in Stock
      </Heading>
      <GridSection>
        {products.map(({ id, imgSrc, price, title, rating }) => (
          <ProductCard key={id} imgSrc={imgSrc} rating={rating} price={price}>
            {title}
          </ProductCard>
        ))}
      </GridSection>
    </Section>
  );
};

export default BackInStockSection;
