import Section from "../../Section/Section";
import ProductCard from "../../card/ProductCard";
import Heading from "../../mainHeading/Heading";
import img1 from "../../../assets/products/Rectangle98.png";
import img2 from "../../../assets/products/Rectangle98_1.png";
import img3 from "../../../assets/products/Rectangle98_2.png";
import img4 from "../../../assets/products/Rectangle98_3.png";
import GridSection from "../../Section/GridSection";

const EntireRangSection = () => {
  const products = [
    {
      id: 1,
      title: "Blue & White Spring Time Pot",
      imgSrc: img1,
      rating: 0.1,
      price: 100,
    },
    {
      id: 2,
      title: "Metal Animals/Birds",
      price: 100,
      imgSrc: img2,
      rating: 0.1,
    },
    {
      id: 3,
      title: "Rusty Gardenware",
      price: 100,
      imgSrc: img3,
      rating: 0.1,
    },
    {
      id: 4,
      title: "Decorative",
      price: 100,
      imgSrc: img4,
      rating: 0.1,
    },
  ];
  return (
    <Section className=" bg-secondary-green">
      <Heading
        className="py-5"
        title={"Check Out Our Entire Range of Products"}
      >
        Entire Range
      </Heading>
      <GridSection>
        {products.map(({ id, category, title, price, imgSrc, rating }) => (
          <ProductCard
            key={id}
            category={category}
            price={price}
            imgSrc={imgSrc}
            rating={rating}
          >
            {title}
          </ProductCard>
        ))}
      </GridSection>
    </Section>
  );
};

export default EntireRangSection;
